import React, { useState } from 'react';
import { Empty, Card, Tag, Divider, Switch, List } from 'antd';

import * as SearchArticleTypes from '.././__generated__/SearchArticle';

interface ArticleSearchResultProps {
  article: SearchArticleTypes.SearchArticle_searchArticle_parse | null
  loading: boolean
}


const ArticleSearchResult: React.FC<ArticleSearchResultProps> = ({ article, loading }) => {
  const [areHiddenCategoriesShown, setAreHiddenCategoriesShown] = useState(false);

  if (loading) return <Card loading />
  if (!article) return <Empty />;
  // const categoryBadges = article.categories.map((category) => {
  //   const color = category && category.hidden ? 'error' : 'success';
  //   return <Tag color={color} key={category && category.category}>{category && category.category}</Tag>
  // })
  const notHiddenCategories = article.categories.filter((category) => {
    return areHiddenCategoriesShown || (category && !category.hidden)
  })
  const categoryBadges = notHiddenCategories.map((category) => {
    const color = category && category.hidden ? 'error' : 'success';
    return <Tag color={color} key={category && category.category}>{category && category.category}</Tag>
  })
  const sortedArticleSections: any = [...article.sections].sort((a,b) => {
    if (a && b) {
      return parseInt(a.index, 10) - parseInt(b.index, 10);
    }
    return 0;
  })
  return (
    <Card
      title={article.title}
      extra={
        <Switch
          checkedChildren="Hidden categories are shown"
          unCheckedChildren="Hidden categories are not shown"
          checked={areHiddenCategoriesShown}
          onChange={(checked) => setAreHiddenCategoriesShown(checked)}
          />
      }
    >
      {categoryBadges}
      <Divider />
      <List 
        header='Table of Contents'
        bordered
        dataSource={sortedArticleSections}
        renderItem={(item: SearchArticleTypes.SearchArticle_searchArticle_parse_sections) => (
          <List.Item style={{ paddingLeft: item.toclevel * 25}}>
            {`${item.number} ${item.line}`}
          </List.Item>
        )}
      />
      <Divider style={{ paddingBottom: 25 }}/>
    </Card>
  );
}

export default ArticleSearchResult;
