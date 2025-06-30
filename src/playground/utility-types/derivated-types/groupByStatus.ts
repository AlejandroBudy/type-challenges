type CourseStatus = 'archived' | 'active';

export interface Course {
  name: string;
  status: CourseStatus;
}

// manual grouping, new status requires break client
type GroupedCoursesByStatus = {
  active: Course[];
  archived: Course[];
};

export function groupedByStatus(
  courses: Course[],
): Record<CourseStatus, Course[]> {
  const grouped: Record<CourseStatus, Course[]> = {
    archived: [],
    active: [],
  };

  courses.forEach(course => {
    grouped[course.status].push(course);
  });

  return grouped;
}
