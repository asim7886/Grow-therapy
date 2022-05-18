import React from "react";
import { Card } from "antd";

const ArticleCards = (props) => {
  console.log(props.data.items[0].articles[0]);

  const articleData = props.data.items[0].articles[0];
  return (
    <div>
      <Card title={articleData.article} border={true} style={{ width: 300 }}>
        <p>
          <strong>Rank:</strong>
          {" " + articleData.rank}
        </p>
        <p>
          <strong>Views:</strong>
          {" " + articleData.views}
        </p>
      </Card>
    </div>
  );
};

export default ArticleCards;
