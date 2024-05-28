document.addEventListener("DOMContentLoaded", () => {
    const microcopyList = [
        "Hang tight, we're loading your content!",
        "Whoops! Looks like you took a wrong turn.",
        "Success! Your action was completed.",
        "Need help? We're just a click away.",
        "You’re almost there, just a bit more info.",
        "Hold on, we’re securing your data.",
        "Enjoying our service? Share your feedback!",
        "Yay! You’ve unlocked a new feature.",
        "Psst... Here's a tip: try searching 'latest'.",
        "Snap! That didn't work. Try again.",
        "You're a rockstar! Keep going.",
        "Heads up! New updates available.",
        "Your journey starts here. Let's go!",
        "We've got your back. Contact support anytime.",
        "All systems go! You're ready to launch.",
        "That’s odd. Let’s fix it together.",
        "Fetching your data...almost there.",
        "A little patience goes a long way.",
        "Welcome aboard! Let's make magic happen.",
        "Oops, you missed a spot. Fill out this field.",
        "You're one step closer to awesomeness.",
        "We'll be right with you. Loading...",
        "Bummer! Something went wrong.",
        "Ready to dive in? Start exploring now.",
        "Keep calm and carry on. We're on it.",
        "Shiny new features await you!",
        "Almost done! Just need a bit more info.",
        "Error 404: Fun not found. Try again!",
        "Great job! You're all set.",
        "Let’s get this show on the road.",
        "Our elves are working on it. Hold tight!",
        "You're in! Welcome to the family.",
        "Just a moment... Your request is being processed.",
        "Congrats! You've just leveled up.",
        "Patience, young padawan. Loading...",
        "This page is taking a coffee break.",
        "Please confirm you’re not a robot.",
        "Good things come to those who wait.",
        "You're on fire! Keep it up.",
        "Your wish is our command. Processing...",
        "Let’s make some magic happen!",
        "Error: Adventure not found. Retry?",
        "We're almost there... Just a few more seconds.",
        "Keep going, you’re doing great!",
        "Oops! Something’s not quite right.",
        "Hang in there, superstar! Loading...",
        "Well, this is embarrassing. Try again?",
        "You're all set to conquer the world!",
        "Fetching awesomeness... Please wait.",
        "Thank you for your patience. We’re on it!"
    ];

    const microcopySection = document.getElementById("microcopySection");
    const searchBar = document.getElementById("searchBar");

    const displayMicrocopy = (list) => {
        microcopySection.innerHTML = "";
        list.forEach(copy => {
            const div = document.createElement("div");
            div.className = "microcopy";
            div.innerHTML = `<p>${copy}</p>`;
            microcopySection.appendChild(div);
        });
    };

    searchBar.addEventListener("input", () => {
        const searchQuery = searchBar.value.toLowerCase();
        const filteredList = microcopyList.filter(copy => copy.toLowerCase().includes(searchQuery));
        displayMicrocopy(filteredList);
    });

    displayMicrocopy(microcopyList);
});
