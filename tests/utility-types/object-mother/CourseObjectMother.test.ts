import {CourseObjectMother} from '../../../src/playground/utility-types/object-mothers/CourseObjectMother';

describe('CourseObjectMother', () => {
  it('Has properties defined', () => {
    const course = {
      id: 'identifier',
      title: 'Types',
      slug: 'advanced-types',
    };

    expect(course.id).toBeDefined();
    expect(course.title).toBeDefined();
    expect(course.slug).toBeDefined();
  });

  it('Has specified title', () => {
    const expectedName = 'my title';
    const course = CourseObjectMother.create({title: expectedName});

    expect(course.title).toBe(expectedName);
  });
});
