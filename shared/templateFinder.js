/*global rendr*/
var templates = null;

module.exports = function(Handlebars) {
  
  return {
    getTemplate: function(templateName) {
      /**
       * Allow compiledTemplates to be created asynchronously.
       */
      templates = templates || require(rendr.entryPath + '/app/templates/compiledTemplates')(Handlebars);
      return templates[templateName];
    },
    getPartialTemplate = function(templateName) {
      /* Allow compiledTemplates to be created asynchronously.
      */
      require(rendr.entryPath + '/app/templates/compiledTemplates')(Handlebars);
      templates = templates || Handlebars.partials;

    
      return templates[templateName];
    }
  }
};
