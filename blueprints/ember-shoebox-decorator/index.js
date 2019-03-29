module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return this.addAddonToProject('@ember-decorators/babel-transforms');
  }
};
