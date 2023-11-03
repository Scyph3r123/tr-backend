'use strict';


module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // const extensionService = strapi.plugin('graphql').service('extension');
    const extension = ({ nexus }) => ({
      // GraphQL SDL
      // typeDefs: `


      // `,
      // resolvers: {
      //   Query: {
      //     projects: async (obj, { featured }) => {
      //       const projects = await strapi.query('projects').find({ featured });
      //       return projects;
      //     },
      //   },
      // },
    });
    // extensionService.use(extension);
  },
};