export const getTodaysDate = () => {
    return new Date().toISOString().split("T")[0];
};

export const setStartDate = (dateStr) => {
    localStorage.setItem("sinceDate", dateStr);
};

export const getStartDate = () => {
    return localStorage.getItem("sinceDate");
};

export const calculateDaysSober = (dateStr) => {
    const start = new Date(dateStr);
    const today = new Date();
    const diffTime = today - start;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

export const getMilestoneMessage = (days) => {
    const fixedMilestones = [5, 10, 15, 20, 25, 30];
    if (fixedMilestones.includes(days)) {
        return `${days} days sober! Keep going! 💪`;
    }

    // Weekly milestones: 1 to 10 weeks
    if (days >= 7 && days <= 70 && days % 7 === 0) {
        const weeks = days / 7;
        return `${weeks} week${weeks > 1 ? "s" : ""} sober 🎉`;
    }
  
    // Monthly milestones: every 30 days after 60
    if (days > 60 && days % 30 === 0) {
        const months = Math.floor(days / 30);
        return `${months} months sober 🎯`;
    }
  
    return null; // No milestone
};
  