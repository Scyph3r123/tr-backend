'use strict';

/**
 * project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) =>  ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.service('api::post.project').findOne(id);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
        return this.transformResponse(sanitizedEntity)
    }
}));
