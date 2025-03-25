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
    const fixedMilestones = [5, 10, 15, 20, 25, 30, 42, 60];
    if (fixedMilestones.includes(days)) {
      switch (days) {
        case 42: return "6 weeks sober 🎉";
        case 60: return "2 months sober 💪";
        default: return `${days} days sober! Keep going! 🚀`;
      }
    }
  
    // Monthly milestones (every 30 days after 60)
    if (days > 60 && days % 30 === 0) {
      const months = Math.floor(days / 30);
      return `${months} months sober 🗓️`;
    }
  
    return null; // No milestone
  };
  