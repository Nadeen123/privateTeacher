import {
  Course_GET_TEACHER_COURSE_By_Id,
  Course_GET_Time_COURSE_By_Id,
  FETCH_ERROR,
  Course_PUSH_TEACHER_COURSE_By_Id,
} from './types';

export const GetTeacherCourseById = (teacherId) => (dispatch) => {
  try {
    // get teacher coures by id
    const courseInfo = [];
    dispatch({type: Course_GET_TEACHER_COURSE_By_Id, payload: courseInfo});
  } catch (err) {
    dispatch({type: FETCH_ERROR, payload: err});
  }
};

export const PushTeacherCourseById = ({
  id,
  teacherId,
  name,
  durtion,
  price,
}) => (dispatch) => {
  try {
    // {id, teacherId, name, durtion, price}
    // const newCourse = {id, teacherId, name, durtion, price};
    console.log('couse data res', {id, teacherId, name, durtion, price});
    dispatch({
      type: Course_PUSH_TEACHER_COURSE_By_Id,
      payload: {id, teacherId, name, durtion, price},
    });
  } catch (err) {
    dispatch({type: FETCH_ERROR, payload: err});
  }
};
export const GetCourseTime = (teacherId, courseId) => (dispatch) => {
  try {
    // get teacher coures by id
    const courseTimes = [
      [
        {
          id: 1,
          courseId: 1,
          teacherId: 1,
          label: 'Nov , 20 4:00 PM 1 houre  20$',
          value: 0,
        },
        {
          id: 2,
          courseId: 1,
          teacherId: 1,
          label: 'Nov , 22 2:00 PM 1:30 houre  30$',
          value: 2,
        },
        {
          id: 3,
          courseId: 1,
          teacherId: 1,
          label: 'Nov , 25 1:00 PM 2 houre  40$',
          value: 3,
        },
        {
          id: 4,
          courseId: 1,
          teacherId: 1,
          label: 'Nov , 28 3:00 PM 3 houre  60$',
          value: 4,
        },
      ],
      [
        {
          id: 1,
          courseId: 2,
          teacherId: 1,
          label: 'Nov , 20 4:00 PM 1 houre  20$',
          value: 0,
        },
        {
          id: 2,
          courseId: 2,
          teacherId: 1,
          label: 'Nov , 22 2:00 PM 1:30 houre  30$',
          value: 2,
        },
        {
          id: 3,
          courseId: 2,
          teacherId: 1,
          label: 'Nov , 25 1:00 PM 2 houre  40$',
          value: 3,
        },
        {
          id: 4,
          courseId: 2,
          teacherId: 1,
          label: 'Nov , 28 3:00 PM 3 houre  60$',
          value: 4,
        },
      ],
      [
        {
          id: 1,
          courseId: 3,
          teacherId: 1,
          label: 'Nov , 20 4:00 PM 1 houre  20$',
          value: 0,
        },
        {
          id: 2,
          courseId: 3,
          teacherId: 1,
          label: 'Nov , 22 2:00 PM 1:30 houre  30$',
          value: 2,
        },
        {
          id: 3,
          courseId: 3,
          teacherId: 1,
          label: 'Nov , 25 1:00 PM 2 houre  40$',
          value: 3,
        },
        {
          id: 4,
          courseId: 3,
          teacherId: 1,
          label: 'Nov , 28 3:00 PM 3 houre  60$',
          value: 4,
        },
      ],
    ];

    const courseTime = courseTimes.filter(
      (x) => x[0].courseId === courseId && x[0].teacherId === teacherId,
    );

    console.log('courseTime : ', courseTime);
    dispatch({type: Course_GET_Time_COURSE_By_Id, payload: courseTime});
  } catch (err) {
    dispatch({type: FETCH_ERROR, payload: err});
  }
};
