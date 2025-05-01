import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TopicAnnouement extends Struct.ComponentSchema {
  collectionName: 'components_topic_annouements';
  info: {
    description: '';
    displayName: 'annouement';
  };
  attributes: {
    announcement: Schema.Attribute.String;
  };
}

export interface TopicArticleParagraph extends Struct.ComponentSchema {
  collectionName: 'components_topic_article_paragraphs';
  info: {
    description: '';
    displayName: 'article_paragraph';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph: Schema.Attribute.Text;
  };
}

export interface TopicBlogBody extends Struct.ComponentSchema {
  collectionName: 'components_topic_blog_bodies';
  info: {
    displayName: 'blogBody';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface TopicHelpArticleContent extends Struct.ComponentSchema {
  collectionName: 'components_topic_help_article_contents';
  info: {
    displayName: 'Help-article -content';
  };
  attributes: {
    content: Schema.Attribute.Text;
    Header: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface TopicTopic extends Struct.ComponentSchema {
  collectionName: 'components_topic_topics';
  info: {
    description: '';
    displayName: 'topic';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'topic.annouement': TopicAnnouement;
      'topic.article-paragraph': TopicArticleParagraph;
      'topic.blog-body': TopicBlogBody;
      'topic.help-article-content': TopicHelpArticleContent;
      'topic.topic': TopicTopic;
    }
  }
}
