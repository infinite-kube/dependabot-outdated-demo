# Policy for Dependency Updates

- **Dependabot (version updates)** checks our dependency graph on a schedule and opens PRs with release notes and changelogs.
- **Auto-merge**: semver **minor** and **patch** updates merge automatically once CI is green.
- **Manual review**: semver **major** updates require a human to review and merge.
