// Shows one tab panel at a time (Publications / Awards / Leadership). Supports arrow keys and #publications / #awards / #leadership links.
(() => {
  const list = document.querySelector('.tab-list');
  if (!list) return;

  const tabs = [...list.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));

  function select(tab, { focus = false, updateHash = true } = {}) {
    tabs.forEach((t, i) => {
      const selected = t === tab;
      t.setAttribute('aria-selected', selected);
      t.tabIndex = selected ? 0 : -1;
      panels[i].hidden = !selected;
    });
    if (focus) tab.focus();
    if (updateHash) history.replaceState(null, '', '#' + tab.dataset.tab);
  }

  const tabFromHash = () => tabs.find((t) => '#' + t.dataset.tab === location.hash) || tabs[0];

  tabs.forEach((tab) => tab.addEventListener('click', () => select(tab)));

  list.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    if (next === null) return;
    e.preventDefault();
    select(tabs[next], { focus: true });
  });

  window.addEventListener('hashchange', () => select(tabFromHash(), { updateHash: false }));

  list.hidden = false;
  select(tabFromHash(), { updateHash: false });
})();
