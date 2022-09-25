const loadData= async()=>{
    const url="https://openapi.programming-hero.com/api/news/categories"
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    displayTopics(data.data.news_category)
    }

    const displayTopics = topics =>{
        const topicContainerEl = document.getElementById('');
        const topicsListEl = document.getElementById('topics-list');
        topics.forEach(topic =>{
            topicsListEl.innerHTML=`
            <li></li>
            `
            topicContainerEl.appendChild(topicsListEl);
        })
    }

loadData();