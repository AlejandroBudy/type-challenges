import {CourseObject} from './CourseObject';
import {faker} from '@faker-js/faker';

type CourseObjectPartials = Partial<CourseObject>;

export class CourseObjectMother {
  static create(partialCourse?: CourseObjectPartials): CourseObject {
    const randomCourse: CourseObject = {
      id: faker.string.uuid(),
      slug: faker.string.alphanumeric(10),
      title: faker.string.alpha(20),
    };

    const courseOverrideDefaults = {
      ...randomCourse,
      ...partialCourse,
    };

    return courseOverrideDefaults;
  }
}
