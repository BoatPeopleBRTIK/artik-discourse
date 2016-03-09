export default function logout(siteSettings, keyValueStore) {
  keyValueStore.abandonLocal();

  const redirect = siteSettings.logout_redirect;
  if (Ember.isEmpty(redirect)) {
    window.location.pathname = Discourse.getURL('/');
  } else {
    current_page = window.location.href;
    window.location.href = redirect + '?redirect_url=' + current_page;
  }
}
