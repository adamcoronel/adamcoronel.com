const projects = [
    {
        id: "blitz-support",
        title: "Blitz.gg Support Agent",
        type: "Internship",
        summary:
            "A TypeScript/Node.js support automation system serving 70,000+ users — AI-driven ticket categorization and a multilingual SQL-based response engine.",
        problem:
            "Manual ticket resolution didn't scale. The support queue was growing faster than the team could handle it.",
        built: "An automated support agent that categorized, routed, and responded to tickets — reducing manual resolution by 80%. Owned the full lifecycle: architecture, implementation, testing, and deployment.",
        reflection:
            "The hardest part wasn't the code — it was designing the categorization logic to fail gracefully. An automated response that confidently gives the wrong answer is worse than no automation at all.",
        stack: ["TypeScript", "Node.js", "SQL", "AI/ML"],
        github: null,
        demo: null,
    },
    {
        id: "file-retrieval",
        title: "File Retrieval Engine",
        type: "Academic",
        summary:
            "A distributed command-line search engine built with POSIX sockets, then extended to gRPC and ZeroMQ — with a benchmarking suite for latency, throughput, and concurrency testing.",
        problem:
            "How do you build a search engine that actually scales — and how do you prove it does?",
        built: "A full distributed search system across three communication paradigms (sockets → RPC → pub/sub), plus a benchmarking suite to measure real-world performance under concurrent load.",
        reflection:
            "Switching from POSIX sockets to gRPC exposed how much complexity a good abstraction can hide — and how quickly that abstraction breaks down under load testing. I'd spend more time stress-testing edge cases in the socket layer before moving up the stack.",
        stack: ["C++", "POSIX sockets", "gRPC", "ZeroMQ"],
        github: null,
        demo: null,
    },
    {
        id: "cat-and-yarn",
        title: "Cat & Yarn",
        type: "Personal",
        summary:
            "A physics-based puzzle platformer built in Godot — the subject of a full HCI research project including personas, UI/UX documentation, and three structured usability studies.",
        problem:
            "Can you apply formal HCI methodology to game design — and actually improve the game because of it?",
        built: "A playable game alongside a full HCI research pipeline: personas, wireframes, usability studies, and iterative design cycles informed by real player feedback.",
        reflection:
            "Players consistently got stuck in the same two spots I'd stopped noticing after my tenth playthrough. Running structured studies rather than relying on my own judgment was the most valuable part — and the most humbling.",
        stack: ["Godot", "GDScript", "HCI methodology"],
        github: null,
        demo: null,
    },
    {
        id: "sweet-home-finder",
        title: "Sweet Home Finder",
        type: "Academic",
        summary:
            "A 90+ page software requirements specification for a community-facing pet adoption platform — covering the full software engineering lifecycle from stakeholder analysis to system architecture.",
        problem:
            "What does it actually take to specify a real software system before writing a single line of code?",
        built: "A production-grade SRS: 20+ requirement categories, stakeholder analysis, UML modeling, use case diagrams, and constrained architecture design.",
        reflection:
            "Writing a 90-page spec before any code exists forces a level of clarity I'd previously skipped in side projects. Ambiguous requirements don't become obvious until you try to write them precisely — and then they become unavoidable.",
        stack: ["SRS methodology", "UML", "Systems design"],
        github: null,
        demo: null,
    },
];
