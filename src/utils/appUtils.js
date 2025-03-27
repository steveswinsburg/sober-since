export const getTodaysDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

export const setStartDate = (dateStr) => {
    localStorage.setItem("sinceDate", dateStr);
};

export const getStartDate = () => {
    return localStorage.getItem("sinceDate");
};

export const calculateDaysSober = (dateStr) => {
    const start = new Date(dateStr);
    const now = new Date();
  
    // Normalize both to start of their respective days
    const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    const diffTime = today - startDay;
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
  