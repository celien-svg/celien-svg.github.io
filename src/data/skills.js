export const skills = [
    {
        id: 1,
        title: "Réaliser un développement d’application",
        short: "Concevoir, développer et tester des applications.",
        description: `
Cette compétence couvre la conception, le développement, les tests et la maintenance d’applications.
Elle inclut la programmation en C, C++, JavaScript, Vue.js, ainsi que la création d’interfaces web.
    `,
        technologies: ["C", "C++", "JavaScript", "Vue.js", "HTML/CSS", "Git"],
        projects: [
            {
                title: "Jeu textuel (C)",
                description: "Un jeu en ligne de commande développé en C, mettant en avant la logique, les structures et la gestion d’entrées.",
                link: "https://github.com/celien-svg/jeux-textuel"
            },
            {
                title: "TP3 MSI (C++)",
                description: "Projet C++ démontrant l’utilisation de classes, pointeurs, compilation et architecture logicielle.",
                link: "https://github.com/celien-svg/tp3_msi"
            },
            {
                title: "R411 TCG Vue.js",
                description: "Application Vue.js complète avec composants, routing et gestion d’état.",
                link: "https://github.com/celien-svg/r411tcgvuejs"
            },
            {
                title: "Site web JO",
                description: "Site web HTML/CSS présentant un événement sportif.",
                link: "https://github.com/celien-svg/site-web-JO"
            },
            {
                title: "SAE Web",
                description: "Projet web complet en HTML/CSS/JS réalisé en équipe.",
                link: "https://github.com/celien-svg/sae_web"
            }
        ]
    },

    {
        id: 2,
        title: "Optimiser des applications informatiques",
        short: "Améliorer les performances, la qualité et la sécurité.",
        description: `
Cette compétence concerne l’optimisation du code, la qualité logicielle, la complexité, 
la refactorisation et les bonnes pratiques de développement.
    `,
        technologies: ["Analyse de complexité", "Refactorisation", "Tests", "Optimisation"],
        projects: [
            {
                title: "R411 TCG Vue.js",
                description: "Refactorisation de composants, optimisation du DOM et amélioration de la structure du projet.",
                link: "https://github.com/celien-svg/r411tcgvuejs"
            },
            {
                title: "Jeu textuel (C)",
                description: "Optimisation des boucles, gestion mémoire et amélioration de la structure du code.",
                link: "https://github.com/celien-svg/jeux-textuel"
            }
        ]
    },

    {
        id: 3,
        title: "Administrer des systèmes informatiques communicants complexes",
        short: "Configurer, sécuriser et maintenir des systèmes.",
        description: `
Cette compétence inclut la compréhension des réseaux, des sockets, des protocoles de communication 
et de l’administration système.
    `,
        technologies: ["Sockets", "TCP/UDP", "Linux", "C", "Réseaux"],
        projects: [
            {
                title: "SAE Socket",
                description: "Projet réseau utilisant des sockets pour communiquer entre plusieurs clients.",
                link: "https://github.com/celien-svg/saesocket"
            },
            {
                title: "TP3 MSI (C++)",
                description: "Compilation, exécution, gestion mémoire et manipulation bas niveau.",
                link: "https://github.com/celien-svg/tp3_msi"
            }
        ]
    },

    {
        id: 4,
        title: "Gérer des données de l’information",
        short: "Modéliser, stocker et exploiter des données.",
        description: `
Cette compétence couvre la modélisation, le SQL, les bases de données, les requêtes, 
et la gestion de données dans des API.
    `,
        technologies: ["SQL", "PostgreSQL", "Merise", "UML", "API REST"],
        projects: [
            {
                title: "SAE Base de données",
                description: "Modélisation, création de schémas, requêtes SQL et gestion d’une base complète.",
                link: "https://github.com/celien-svg/SAE_bdd"
            },
            {
                title: "TCG API",
                description: "API manipulant des données JSON, endpoints REST et gestion de collections.",
                link: "https://github.com/celien-svg/tcg-api-celien-svg"
            }
        ]
    },

    {
        id: 5,
        title: "Conduire un projet",
        short: "Planifier, organiser et piloter un projet informatique.",
        description: `
Cette compétence inclut la gestion de projet, la planification, la répartition des tâches, 
la communication et la production de livrables.
    `,
        technologies: ["Gestion de projet", "Git", "Trello", "Documentation"],
        projects: [
            {
                title: "SAE Graphes",
                description: "Projet en équipe autour des graphes, organisation et répartition des tâches.",
                link: "https://github.com/celien-svg/SAE_graphes"
            },
            {
                title: "Star Reduction Groupe 19",
                description: "Projet Astro réalisé en groupe avec gestion de versions et coordination.",
                link: "https://github.com/celien-svg/star-reduction-groupe-19"
            },
            {
                title: "SAE Web",
                description: "Projet web complet nécessitant organisation, planification et livrables.",
                link: "https://github.com/celien-svg/sae_web"
            }
        ]
    },

    {
        id: 6,
        title: "Collaborer au sein d’une équipe informatique",
        short: "Travailler efficacement en équipe.",
        description: `
Cette compétence concerne la communication, l’utilisation d’outils collaboratifs, 
la gestion de versions et le travail en équipe sur des projets complexes.
    `,
        technologies: ["Git", "GitHub", "Scrum", "Travail en équipe"],
        projects: [
            {
                title: "SAE Graphes",
                description: "Travail en équipe avec GitHub, commits réguliers et coordination.",
                link: "https://github.com/celien-svg/SAE_graphes"
            },
            {
                title: "SAE Base de données",
                description: "Projet collaboratif avec répartition des tâches et gestion de versions.",
                link: "https://github.com/celien-svg/SAE_bdd"
            },
            {
                title: "SAE Socket",
                description: "Développement collaboratif d’un système réseau.",
                link: "https://github.com/celien-svg/saesocket"
            },
            {
                title: "Star Reduction Groupe 19",
                description: "Projet Astro réalisé en groupe avec gestion Git.",
                link: "https://github.com/celien-svg/star-reduction-groupe-19"
            }
        ]
    }
]
