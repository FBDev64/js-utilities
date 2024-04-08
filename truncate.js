const getTruncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
        return description;
    }

    const truncated = description.substring(0, maxLength - 3);
    return truncated + '...';
}

let truncateDescription = getTruncateDescription(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.`, 100);

console.log(truncateDescription);
