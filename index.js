const { Command } = require("commander")

const program = new Command()

const EventNames = {
    CommitCommentEvent: "Commit Comment",
    CreateEvent: "Create Event",
    DeleteEvent: "Delete Event",
    ForkEvent: "Fork Event",
    GollumEvent: "Gollum Event",
    IssueCommentEvent: "Issue Comment",
    IssuesEvent: "Issues",
    MemberEvent: "Member",
    PublicEvent: "Public",
    PullRequestEvent: "Pull Request",
    PullRequestReviewEvent: "Pull Request Review",
    PullRequestReviewCommentEvent: "Pull Request Review Comment",
    PullRequestReviewThreadEvent: "Pull Request Review Thread",
    PushEvent: "Pushed",
    ReleaseEvent: "Released",
    SponsorshipEvent: "SponsorShip",
    WatchEvent: "Watched"
}

async function command(username) {
    try {
        const result = await fetch(`https://api.github.com/users/${username}/events`)
        const response = await result.json()
        if (result.status == 200)
            response?.map((event) => (
                console.log(`${EventNames[event.type]} ${event.payload?.commits ? event.payload?.commits?.length + `${event.payload?.commits?.length === 1 ? " commit to " : " commits to "}` + event?.repo?.name : event?.repo?.name}`)
            ))
        else if (result.status === 403) {
            console.log(response.message)
        }
    } catch (e) {
        console.error(e)
    }
}

program
    .command("get <username>")
    .description("get username activity")
    .action(command)

program.parse(process.argv)