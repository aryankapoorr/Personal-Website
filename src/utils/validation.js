/**
 * Data validation utilities for portfolio content
 * Validates content structure and handles malformed data gracefully
 * Requirements: 9.4
 */

// Validation error types
export const ValidationErrorTypes = {
  MISSING_REQUIRED_FIELD: 'MISSING_REQUIRED_FIELD',
  INVALID_TYPE: 'INVALID_TYPE',
  INVALID_FORMAT: 'INVALID_FORMAT',
  INVALID_ENUM_VALUE: 'INVALID_ENUM_VALUE',
  INVALID_URL: 'INVALID_URL',
  INVALID_DATE: 'INVALID_DATE'
};

// Create validation error
export const createValidationError = (type, field, message, value = null) => ({
  type,
  field,
  message,
  value,
  timestamp: new Date().toISOString()
});

// Utility functions
const isString = (value) => typeof value === 'string';
const isArray = (value) => Array.isArray(value);
const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const isBoolean = (value) => typeof value === 'boolean';
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    // Allow relative URLs that start with /
    return url.startsWith('/');
  }
};
const isValidDate = (dateString) => {
  if (dateString === 'Present') return true;
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && dateString.match(/^\d{4}-\d{2}$/);
};

// Personal Information Validation
export const validatePersonalInfo = (data) => {
  const errors = [];
  
  if (!data || !isObject(data)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_TYPE,
      'personalInfo',
      'Personal info must be an object',
      data
    ));
    return { isValid: false, errors, sanitizedData: null };
  }

  // Required fields
  if (!isString(data.name) || !data.name.trim()) {
    errors.push(createValidationError(
      ValidationErrorTypes.MISSING_REQUIRED_FIELD,
      'name',
      'Name is required and must be a non-empty string',
      data.name
    ));
  }

  if (!isString(data.title) || !data.title.trim()) {
    errors.push(createValidationError(
      ValidationErrorTypes.MISSING_REQUIRED_FIELD,
      'title',
      'Title is required and must be a non-empty string',
      data.title
    ));
  }

  if (!isString(data.summary) || !data.summary.trim()) {
    errors.push(createValidationError(
      ValidationErrorTypes.MISSING_REQUIRED_FIELD,
      'summary',
      'Summary is required and must be a non-empty string',
      data.summary
    ));
  }

  // Headshot validation
  if (!data.headshot || !isObject(data.headshot)) {
    errors.push(createValidationError(
      ValidationErrorTypes.MISSING_REQUIRED_FIELD,
      'headshot',
      'Headshot object is required',
      data.headshot
    ));
  } else {
    if (!isString(data.headshot.src) || !data.headshot.src.trim()) {
      errors.push(createValidationError(
        ValidationErrorTypes.MISSING_REQUIRED_FIELD,
        'headshot.src',
        'Headshot src is required',
        data.headshot.src
      ));
    }
    if (!isString(data.headshot.alt) || !data.headshot.alt.trim()) {
      errors.push(createValidationError(
        ValidationErrorTypes.MISSING_REQUIRED_FIELD,
        'headshot.alt',
        'Headshot alt text is required for accessibility',
        data.headshot.alt
      ));
    }
  }

  // Call to actions validation
  if (!isArray(data.callToActions)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_TYPE,
      'callToActions',
      'Call to actions must be an array',
      data.callToActions
    ));
  } else {
    data.callToActions.forEach((cta, index) => {
      const ctaErrors = validateCallToAction(cta, `callToActions[${index}]`);
      errors.push(...ctaErrors);
    });
  }

  // Create sanitized data with defaults
  const sanitizedData = {
    name: isString(data.name) ? data.name.trim() : 'Unknown',
    title: isString(data.title) ? data.title.trim() : 'Software Engineer',
    summary: isString(data.summary) ? data.summary.trim() : 'Professional software engineer',
    headshot: {
      src: data.headshot?.src || '/images/default-headshot.jpg',
      alt: data.headshot?.alt || 'Professional headshot',
      placeholder: data.headshot?.placeholder || null
    },
    callToActions: isArray(data.callToActions) ? data.callToActions.filter(cta => validateCallToAction(cta).length === 0) : []
  };

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  };
};

// Call to Action validation helper
const validateCallToAction = (cta, fieldPrefix = 'callToAction') => {
  const errors = [];
  const validActions = ['scroll', 'download', 'external'];
  const validVariants = ['primary', 'secondary'];

  if (!isObject(cta)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_TYPE,
      fieldPrefix,
      'Call to action must be an object',
      cta
    ));
    return errors;
  }

  if (!isString(cta.id) || !cta.id.trim()) {
    errors.push(createValidationError(
      ValidationErrorTypes.MISSING_REQUIRED_FIELD,
      `${fieldPrefix}.id`,
      'Call to action ID is required',
      cta.id
    ));
  }

  if (!isString(cta.label) || !cta.label.trim()) {
    errors.push(createValidationError(
      ValidationErrorTypes.MISSING_REQUIRED_FIELD,
      `${fieldPrefix}.label`,
      'Call to action label is required',
      cta.label
    ));
  }

  if (!validActions.includes(cta.action)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_ENUM_VALUE,
      `${fieldPrefix}.action`,
      `Action must be one of: ${validActions.join(', ')}`,
      cta.action
    ));
  }

  if (!validVariants.includes(cta.variant)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_ENUM_VALUE,
      `${fieldPrefix}.variant`,
      `Variant must be one of: ${validVariants.join(', ')}`,
      cta.variant
    ));
  }

  return errors;
};

// Quick Links Validation
export const validateQuickLinks = (data) => {
  const errors = [];
  
  if (!isArray(data)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_TYPE,
      'quickLinks',
      'Quick links must be an array',
      data
    ));
    return { isValid: false, errors, sanitizedData: [] };
  }

  const sanitizedData = [];
  const validTypes = ['social', 'professional', 'contact'];

  data.forEach((link, index) => {
    const linkErrors = [];
    
    if (!isObject(link)) {
      linkErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_TYPE,
        `quickLinks[${index}]`,
        'Quick link must be an object',
        link
      ));
      errors.push(...linkErrors);
      return;
    }

    // Required fields
    if (!isString(link.id) || !link.id.trim()) {
      linkErrors.push(createValidationError(
        ValidationErrorTypes.MISSING_REQUIRED_FIELD,
        `quickLinks[${index}].id`,
        'Quick link ID is required',
        link.id
      ));
    }

    if (!isString(link.label) || !link.label.trim()) {
      linkErrors.push(createValidationError(
        ValidationErrorTypes.MISSING_REQUIRED_FIELD,
        `quickLinks[${index}].label`,
        'Quick link label is required',
        link.label
      ));
    }

    if (!isString(link.url) || !link.url.trim()) {
      linkErrors.push(createValidationError(
        ValidationErrorTypes.MISSING_REQUIRED_FIELD,
        `quickLinks[${index}].url`,
        'Quick link URL is required',
        link.url
      ));
    } else if (!isValidUrl(link.url) && !link.url.startsWith('mailto:')) {
      linkErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_URL,
        `quickLinks[${index}].url`,
        'Quick link URL must be a valid URL or mailto link',
        link.url
      ));
    }

    if (!isString(link.icon) || !link.icon.trim()) {
      linkErrors.push(createValidationError(
        ValidationErrorTypes.MISSING_REQUIRED_FIELD,
        `quickLinks[${index}].icon`,
        'Quick link icon is required',
        link.icon
      ));
    }

    if (!validTypes.includes(link.type)) {
      linkErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_ENUM_VALUE,
        `quickLinks[${index}].type`,
        `Type must be one of: ${validTypes.join(', ')}`,
        link.type
      ));
    }

    if (!isBoolean(link.external)) {
      linkErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_TYPE,
        `quickLinks[${index}].external`,
        'External must be a boolean',
        link.external
      ));
    }

    errors.push(...linkErrors);

    // Add sanitized version if no critical errors
    if (linkErrors.length === 0) {
      sanitizedData.push({
        id: link.id.trim(),
        label: link.label.trim(),
        url: link.url.trim(),
        icon: link.icon.trim(),
        type: link.type,
        external: Boolean(link.external)
      });
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  };
};

// Experience Validation
export const validateExperiences = (data) => {
  const errors = [];
  
  if (!isArray(data)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_TYPE,
      'experiences',
      'Experiences must be an array',
      data
    ));
    return { isValid: false, errors, sanitizedData: [] };
  }

  const sanitizedData = [];

  data.forEach((experience, index) => {
    const expErrors = [];
    
    if (!isObject(experience)) {
      expErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_TYPE,
        `experiences[${index}]`,
        'Experience must be an object',
        experience
      ));
      errors.push(...expErrors);
      return;
    }

    // Required fields
    const requiredStringFields = ['id', 'company', 'position', 'startDate', 'endDate', 'description'];
    requiredStringFields.forEach(field => {
      if (!isString(experience[field]) || !experience[field].trim()) {
        expErrors.push(createValidationError(
          ValidationErrorTypes.MISSING_REQUIRED_FIELD,
          `experiences[${index}].${field}`,
          `${field} is required and must be a non-empty string`,
          experience[field]
        ));
      }
    });

    // Date validation
    if (isString(experience.startDate) && !isValidDate(experience.startDate)) {
      expErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_DATE,
        `experiences[${index}].startDate`,
        'Start date must be in YYYY-MM format',
        experience.startDate
      ));
    }

    if (isString(experience.endDate) && !isValidDate(experience.endDate)) {
      expErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_DATE,
        `experiences[${index}].endDate`,
        'End date must be in YYYY-MM format or "Present"',
        experience.endDate
      ));
    }

    // Achievements validation
    if (!isArray(experience.achievements)) {
      expErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_TYPE,
        `experiences[${index}].achievements`,
        'Achievements must be an array',
        experience.achievements
      ));
    } else if (experience.achievements.length === 0) {
      expErrors.push(createValidationError(
        ValidationErrorTypes.MISSING_REQUIRED_FIELD,
        `experiences[${index}].achievements`,
        'At least one achievement is required',
        experience.achievements
      ));
    }

    // Technologies validation
    if (!isArray(experience.technologies)) {
      expErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_TYPE,
        `experiences[${index}].technologies`,
        'Technologies must be an array',
        experience.technologies
      ));
    } else {
      experience.technologies.forEach((tech, techIndex) => {
        const techErrors = validateTechnology(tech, `experiences[${index}].technologies[${techIndex}]`);
        expErrors.push(...techErrors);
      });
    }

    errors.push(...expErrors);

    // Add sanitized version if no critical errors
    if (expErrors.length === 0) {
      sanitizedData.push({
        id: experience.id.trim(),
        company: experience.company.trim(),
        position: experience.position.trim(),
        startDate: experience.startDate.trim(),
        endDate: experience.endDate.trim(),
        description: experience.description.trim(),
        achievements: experience.achievements.filter(a => isString(a) && a.trim()).map(a => a.trim()),
        technologies: experience.technologies.filter(tech => validateTechnology(tech).length === 0),
        location: experience.location ? experience.location.trim() : undefined
      });
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  };
};

// Technology validation helper
const validateTechnology = (tech, fieldPrefix = 'technology') => {
  const errors = [];
  const validCategories = ['language', 'framework', 'tool', 'database'];

  if (!isObject(tech)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_TYPE,
      fieldPrefix,
      'Technology must be an object',
      tech
    ));
    return errors;
  }

  if (!isString(tech.name) || !tech.name.trim()) {
    errors.push(createValidationError(
      ValidationErrorTypes.MISSING_REQUIRED_FIELD,
      `${fieldPrefix}.name`,
      'Technology name is required',
      tech.name
    ));
  }

  if (!validCategories.includes(tech.category)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_ENUM_VALUE,
      `${fieldPrefix}.category`,
      `Category must be one of: ${validCategories.join(', ')}`,
      tech.category
    ));
  }

  return errors;
};

// Projects Validation
export const validateProjects = (data) => {
  const errors = [];
  
  if (!isArray(data)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_TYPE,
      'projects',
      'Projects must be an array',
      data
    ));
    return { isValid: false, errors, sanitizedData: [] };
  }

  const sanitizedData = [];
  const validStatuses = ['completed', 'in-progress', 'planned'];

  data.forEach((project, index) => {
    const projectErrors = [];
    
    if (!isObject(project)) {
      projectErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_TYPE,
        `projects[${index}]`,
        'Project must be an object',
        project
      ));
      errors.push(...projectErrors);
      return;
    }

    // Required fields
    const requiredStringFields = ['id', 'title', 'description', 'category'];
    requiredStringFields.forEach(field => {
      if (!isString(project[field]) || !project[field].trim()) {
        projectErrors.push(createValidationError(
          ValidationErrorTypes.MISSING_REQUIRED_FIELD,
          `projects[${index}].${field}`,
          `${field} is required and must be a non-empty string`,
          project[field]
        ));
      }
    });

    // Image validation
    if (!project.image || !isObject(project.image)) {
      projectErrors.push(createValidationError(
        ValidationErrorTypes.MISSING_REQUIRED_FIELD,
        `projects[${index}].image`,
        'Project image object is required',
        project.image
      ));
    } else {
      if (!isString(project.image.src) || !project.image.src.trim()) {
        projectErrors.push(createValidationError(
          ValidationErrorTypes.MISSING_REQUIRED_FIELD,
          `projects[${index}].image.src`,
          'Project image src is required',
          project.image.src
        ));
      }
      if (!isString(project.image.alt) || !project.image.alt.trim()) {
        projectErrors.push(createValidationError(
          ValidationErrorTypes.MISSING_REQUIRED_FIELD,
          `projects[${index}].image.alt`,
          'Project image alt text is required for accessibility',
          project.image.alt
        ));
      }
    }

    // Technologies validation
    if (!isArray(project.technologies)) {
      projectErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_TYPE,
        `projects[${index}].technologies`,
        'Technologies must be an array',
        project.technologies
      ));
    } else {
      project.technologies.forEach((tech, techIndex) => {
        const techErrors = validateTechnology(tech, `projects[${index}].technologies[${techIndex}]`);
        projectErrors.push(...techErrors);
      });
    }

    // Links validation
    if (!isArray(project.links)) {
      projectErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_TYPE,
        `projects[${index}].links`,
        'Links must be an array',
        project.links
      ));
    } else {
      project.links.forEach((link, linkIndex) => {
        const linkErrors = validateProjectLink(link, `projects[${index}].links[${linkIndex}]`);
        projectErrors.push(...linkErrors);
      });
    }

    // Boolean fields
    if (!isBoolean(project.featured)) {
      projectErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_TYPE,
        `projects[${index}].featured`,
        'Featured must be a boolean',
        project.featured
      ));
    }

    // Status validation
    if (!validStatuses.includes(project.status)) {
      projectErrors.push(createValidationError(
        ValidationErrorTypes.INVALID_ENUM_VALUE,
        `projects[${index}].status`,
        `Status must be one of: ${validStatuses.join(', ')}`,
        project.status
      ));
    }

    errors.push(...projectErrors);

    // Add sanitized version if no critical errors
    if (projectErrors.length === 0) {
      sanitizedData.push({
        id: project.id.trim(),
        title: project.title.trim(),
        description: project.description.trim(),
        longDescription: project.longDescription ? project.longDescription.trim() : undefined,
        image: {
          src: project.image.src.trim(),
          alt: project.image.alt.trim(),
          placeholder: project.image.placeholder || null
        },
        technologies: project.technologies.filter(tech => validateTechnology(tech).length === 0),
        links: project.links.filter(link => validateProjectLink(link).length === 0),
        category: project.category.trim(),
        featured: Boolean(project.featured),
        status: project.status
      });
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  };
};

// Project Link validation helper
const validateProjectLink = (link, fieldPrefix = 'projectLink') => {
  const errors = [];
  const validTypes = ['demo', 'code', 'documentation'];

  if (!isObject(link)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_TYPE,
      fieldPrefix,
      'Project link must be an object',
      link
    ));
    return errors;
  }

  if (!validTypes.includes(link.type)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_ENUM_VALUE,
      `${fieldPrefix}.type`,
      `Type must be one of: ${validTypes.join(', ')}`,
      link.type
    ));
  }

  if (!isString(link.url) || !link.url.trim()) {
    errors.push(createValidationError(
      ValidationErrorTypes.MISSING_REQUIRED_FIELD,
      `${fieldPrefix}.url`,
      'Project link URL is required',
      link.url
    ));
  } else if (!isValidUrl(link.url)) {
    errors.push(createValidationError(
      ValidationErrorTypes.INVALID_URL,
      `${fieldPrefix}.url`,
      'Project link URL must be a valid URL',
      link.url
    ));
  }

  if (!isString(link.label) || !link.label.trim()) {
    errors.push(createValidationError(
      ValidationErrorTypes.MISSING_REQUIRED_FIELD,
      `${fieldPrefix}.label`,
      'Project link label is required',
      link.label
    ));
  }

  return errors;
};

// Main validation function that validates all content
export const validateAllContent = (content) => {
  const results = {
    personalInfo: null,
    quickLinks: null,
    experiences: null,
    projects: null,
    isValid: true,
    errors: [],
    sanitizedData: {}
  };

  // Validate each content type
  if (content.personalInfo) {
    results.personalInfo = validatePersonalInfo(content.personalInfo);
    if (!results.personalInfo.isValid) {
      results.isValid = false;
      results.errors.push(...results.personalInfo.errors);
    } else {
      results.sanitizedData.personalInfo = results.personalInfo.sanitizedData;
    }
  }

  if (content.quickLinks) {
    results.quickLinks = validateQuickLinks(content.quickLinks);
    if (!results.quickLinks.isValid) {
      results.isValid = false;
      results.errors.push(...results.quickLinks.errors);
    } else {
      results.sanitizedData.quickLinks = results.quickLinks.sanitizedData;
    }
  }

  if (content.experiences) {
    results.experiences = validateExperiences(content.experiences);
    if (!results.experiences.isValid) {
      results.isValid = false;
      results.errors.push(...results.experiences.errors);
    } else {
      results.sanitizedData.experiences = results.experiences.sanitizedData;
    }
  }

  if (content.projects) {
    results.projects = validateProjects(content.projects);
    if (!results.projects.isValid) {
      results.isValid = false;
      results.errors.push(...results.projects.errors);
    } else {
      results.sanitizedData.projects = results.projects.sanitizedData;
    }
  }

  return results;
};

// Error handling utilities
export const logValidationErrors = (errors, context = 'Content validation') => {
  if (errors.length === 0) return;
  
  console.group(`🚨 ${context} - ${errors.length} error(s) found:`);
  errors.forEach(error => {
    console.error(`[${error.type}] ${error.field}: ${error.message}`, error.value);
  });
  console.groupEnd();
};

export const getValidationSummary = (validationResult) => {
  const { isValid, errors } = validationResult;
  
  if (isValid) {
    return {
      status: 'success',
      message: 'All content validation passed',
      errorCount: 0
    };
  }

  const errorsByType = errors.reduce((acc, error) => {
    acc[error.type] = (acc[error.type] || 0) + 1;
    return acc;
  }, {});

  return {
    status: 'error',
    message: `Content validation failed with ${errors.length} error(s)`,
    errorCount: errors.length,
    errorsByType
  };
};