import React from 'react'
import Article from './Article'

function ArticleList ({posts}) {
    console.log ({posts})
    
    const articleData = posts.map(dataInside => {
        return (
            <Article 
                key={dataInside.id} 
                title={dataInside.title} 
                date={dataInside.date} 
                preview={dataInside.preview}
            />
        )
    })

    return(
        <main>
            {articleData}
        </main>
    )
}

export default ArticleList