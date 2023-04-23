document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nickname = document.getElementById('nickname').value;
    document.cookie = `nickname=${nickname}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
    location.reload();
  });
  
