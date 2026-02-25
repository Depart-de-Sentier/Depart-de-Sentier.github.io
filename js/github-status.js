/**
 * github-status.js
 * Fetches latest commit date from GitHub repos and displays in legal-status / financial-status elements.
 * Elements remain hidden if fetch fails.
 */
(function () {
  'use strict';

  var REPOS = {
    'legal-status': 'Depart-de-Sentier/Legal',
    'financial-status': 'Depart-de-Sentier/Financial'
  };

  var API_BASE = 'https://api.github.com/repos';

  function formatDate(isoString) {
    var d = new Date(isoString);
    var day = d.getDate();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    return day + ' ' + month + ' ' + year;
  }

  function isWithin30Days(isoString) {
    var d = new Date(isoString);
    var now = new Date();
    var diff = now - d;
    return diff < 30 * 24 * 60 * 60 * 1000;
  }

  function updateElement(id, text, isRecent) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = text;
      el.style.display = 'inline-flex';
      if (isRecent) el.classList.add('status-badge-recent');
    }
  }

  function fetchLatestCommit(repo) {
    return fetch(API_BASE + '/' + repo + '/commits?per_page=1', {
      headers: { Accept: 'application/vnd.github.v3+json' }
    }).then(function (res) {
      if (!res.ok) throw new Error('GitHub API error');
      return res.json();
    }).then(function (data) {
      if (!data || !data[0] || !data[0].commit) throw new Error('Invalid response');
      return data[0].commit.committer.date;
    });
  }

  function run() {
    Object.keys(REPOS).forEach(function (id) {
      fetchLatestCommit(REPOS[id])
        .then(function (dateStr) {
          var text = 'Last update: ' + formatDate(dateStr);
          updateElement(id, text, isWithin30Days(dateStr));
        })
        .catch(function () {
          /* Keep element hidden on failure */
        });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
