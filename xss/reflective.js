</script><script>
    fetch('http://localhost:3001')
        .then(response => response.text())
        .then(html => console.log(html))
        .catch(console.log);
</script>