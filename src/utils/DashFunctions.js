export const dailySignups = (data) => {
  const today = new Date();

  // Get last 30 days in YYYY-MM-DD format
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    return d.toISOString().slice(0, 10);
  }).reverse();

  // Count signups for each date
  return last30Days.map(date => ({
    date,
    count: data.filter(d => d.createdAt?.slice(0, 10) === date).length
  }));
};




export const avatarDistribution = (users) => {
  const hasAvatar = users.filter(u => u.avatar).length;
  const noAvatar = users.length - hasAvatar;
  return { hasAvatar, noAvatar };
};


export const getSignupHours = (users) => {
  const hours = Array.from({ length: 24 }, (_, i) => ({ hour: i, count: 0 }));

  users.forEach(u => {
    if (!u?.createdAt) return; // agar null/undefined hai toh skip

    try {
      const h = new Date(u.createdAt).getUTCHours();
      if (typeof h === "number") {
        hours[h].count += 1;
      }
    } catch {
      // invalid date ho toh skip kar do
    }
  });

  return hours;
};



// Top 5 most recent users
export const getRecentUsers = (users) => {
  return [...users]
    .filter(u => u?.createdAt) 
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);
};
