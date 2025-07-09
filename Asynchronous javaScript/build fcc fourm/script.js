const forumLatest = 'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

// 1. timeAgo
function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInMinutes = Math.floor((now - past) / (1000 * 60));

  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const hours = Math.floor(diffInMinutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// 2. viewCount
function viewCount(views) {
  return views >= 1000 ? `${Math.floor(views / 1000)}k` : views;
}

// 3. forumCategory
function forumCategory(id) {
  const cat = allCategories[id];
  if (cat) {
    return `<a class="category ${cat.className}" href="${forumCategoryUrl}${cat.className}/${id}">${cat.category}</a>`;
  } else {
    return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;
  }
}