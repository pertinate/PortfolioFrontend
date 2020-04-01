import React from 'react';

export default function Bio(props) {
    return (
        <div style={{ margin: '16px', fontSize: '24px' }}>
            <p>
                So to start off, I've been programming since a young age. Born
                in 1995, I began my programming adventures at a mere 10 years
                old in Java. My projects normally consisted of making private
                servers for myself and friends to play on because we all enjoyed
                the game immensely. However, this only lasted for a couple
                years. I eventually moved over to the Unity3D game engine. I
                started the engine by learning a specific language that the
                Unity team had developed named UnityScript, which was just their
                brand of JavaScript.
            </p>
            <p>
                I eventually learned the shortcomings of the UnityScript
                language with Unity's compiler. I eventually started to pick up
                C# as that was the engine's main feature. This is where my
                programming knowledge took off. After learning how to utilize
                the engine I eventually joined an indie game dev team. We all
                tried to work together to build a game to sell but everyone on
                the team had a difference of opinions. We eventually split up
                with me, Bjorn (modeller), and Tristan (SFX) teaming up right
                afterwards. We decided to try to go for a Unity GameJam to help
                hone our skills.
            </p>
            <p>
                With this game, we developed it in 24 hours as we had joined
                late. But we had so much fun writing out the game that we
                continued to work on it and develop it further. It eventually
                became a mobile platformer similar to Temple Run except you
                could attack the enemies that spawned while avoiding the
                obstacles. While we did get it out onto the Android App Store,
                we didn't keep up with the project as we all had started
                focusing on our personal lives.
            </p>
            <p>
                I eventually worked with Tristan and Bjorn again by joining
                another indie game dev team named Kybernesis. I joined to help
                with working on the game they were developing named PIB
                (Paranormal Intelligence Bureau). In this project I was the main
                programmer with the owner of the group, Ronny Anderssen, guiding
                me to help have a more professional take on game development.
                Ronny helped me develop my skills with git, project structure,
                and mastering C# in unity. While he was busy in his other job he
                was contracted, he still put his time into helping me learn and
                became a very vital resource.
            </p>
            <p>
                Eventually, I started working at the Wal-Mart Homeoffice contact
                center. While at the contact center, I held quite good metrics.
                Which eventually landed me a job as a Technician IV at the DGTC
                (David Glass Technology Center). With taking this new job I
                would start my career as a full stack/devops developer. I began
                to learn JavaScript and utilizing NodeJS to create backend
                servers to takeover the lead programmer role in the team POS
                (Point of Sale). After taking the lead programming spot, I took
                over a huge project named Hephaestus. This project consisted of
                monitoring all wal-mart sites (Wal-Mart stores and Sam's Clubs)
                and determining if the site was considered down by POS
                standards. These standards were if over fifty percent of the
                registers were down/offline or if specific services were down.
                To achieve this, we stitched multiple sets of data together from
                other teams' databases, kafka queues, and from the sites
                directly. From there, we ping the devices in the site to make
                sure they are online. Which before, Wal-Mart did not have a
                automatic process of collecting this information.
            </p>
            <p>
                Also, I started and finished a project that managers of Field
                Support (Field Support consists of 5 teams which totaled around
                200 associates). This project was called FS ACI (Field Support
                Associate Call In). This app let managers report associate call
                ins on a web portal instead of sending emails to a distribution
                list. With this project, I utilized many skills including
                databases, single-sign on, active directory group enforcement,
                and serving a react based frontend.
            </p>
            <p>
                While developing FS ACI and rewriting the Hephaestus project, I
                also learned CI/CD (Continuous Integration and Continuous
                Deployment) practices while also learning how to manage my own
                CentOS 7 virtual machine ordered from another Wal-Mart team. The
                techs I used for CI/CD were Looper and Concord. Also, the techs
                I used for server management were NGINX for reverse proxying and
                PM2 for process management and load balancing.
            </p>
            <p>
                Another crucial task I picked up is to also help other team
                members find a path to learn how to start programming. Becoming
                a resource for people that, not only on my team but also other
                teams, everyone could utilize.
            </p>
        </div>
    );
}
