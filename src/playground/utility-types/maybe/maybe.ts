export type Course = {
  name: string;
};

type Maybe<T> = T | undefined;

function tryCreateCourse(): Maybe<Course> {
  throw new Error('Not undefined');
}

const course = tryCreateCourse();

if (course) {
  console.log(course.name);
}
