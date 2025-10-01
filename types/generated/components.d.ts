import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneFaqBlock extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_faq_blocks';
  info: {
    displayName: 'FAQBlock';
    icon: 'question';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    authorPhoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    authorRole: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    icon: 'file';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GlobalHeader extends Struct.ComponentSchema {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
    icon: 'file';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GlobalSeo extends Struct.ComponentSchema {
  collectionName: 'components_global_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'Address';
    icon: 'pinMap';
  };
  attributes: {
    city: Schema.Attribute.String;
    country: Schema.Attribute.Relation<'oneToOne', 'api::country.country'>;
    state: Schema.Attribute.Relation<'oneToOne', 'api::state.state'>;
    streetName: Schema.Attribute.String;
    streetNumber: Schema.Attribute.Integer;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'file';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.faq-block': DynamicZoneFaqBlock;
      'dynamic-zone.hero-section': DynamicZoneHeroSection;
      'dynamic-zone.testimonial': DynamicZoneTestimonial;
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'global.seo': GlobalSeo;
      'shared.address': SharedAddress;
      'shared.link': SharedLink;
    }
  }
}
