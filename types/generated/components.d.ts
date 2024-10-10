import type { Schema, Attribute } from '@strapi/strapi';

export interface DocumentsPdFlink extends Schema.Component {
  collectionName: 'components_documents_pd_flinks';
  info: {
    displayName: 'PDFlink';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    Nombre: Attribute.String;
    URL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'documents.pd-flink': DocumentsPdFlink;
    }
  }
}
