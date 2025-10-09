const semver = require('semver');
const axiosPkg = require('axios/package-2.json');

describe('Demonstrate benefits & risks of updates', () => {
  const v = axiosPkg.version;

  test('Bug fix becomes available in newer axios (>=1.0.0)', () => {
    // Pretend this represents a real bug fixed in >=1.0.0.
    // If we’re still on 0.x, we FAIL to show “update needed”.
    if (semver.gte(v, '1.0.0')) {
      expect(true).toBe(true); // fixed when updated
    } else {
      throw new Error(
        `Simulated failing scenario on axios ${v} — fix available in >=1.0.0`
      );
    }
  });

  test('Legacy code path expects old axios behavior (<1.0.0)', () => {
    // This simulates “something gets worse”: legacy code relies on pre-1.x behavior.
    // When Dependabot proposes axios 1.x, this test FAILS to force a human review.
    if (semver.lt(v, '1.0.0')) {
      expect(true).toBe(true); // legacy still OK on old version
    } else {
      throw new Error(
        `Legacy compatibility broken on axios ${v} — requires refactor/migration`
      );
    }
  });
});
