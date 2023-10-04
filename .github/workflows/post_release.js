const STAGED_LABEL = "status/StageForNextRelease";

/**
 * Fetch issues using GitHub REST API
 *
 * @param {object} gh_client - Pre-authenticated REST client (Octokit)
 * @param {string} org - GitHub Organization
 * @param {string} repository - GitHub repository
 * @param {string} state - GitHub issue state (open, closed)
 * @param {string} label - Comma-separated issue labels to fetch
 * @return {Object[]} issues - Array of issues matching params
 * @see {@link https://octokit.github.io/rest.js/v18#usage|Octokit client}
 */
const fetchIssues = async ({
    gh_client,
    org,
    repository,
    state = "open",
    label = STAGED_LABEL,
}) => {

    try {
        const { data: issues } = await gh_client.rest.issues.listForRepo({
            owner: org,
            repo: repository,
            state: state,
            labels: label,
        });

        return issues;

    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch issues")
    }

};