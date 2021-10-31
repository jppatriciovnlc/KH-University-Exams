export const Types = {
  SET_EXAM: 'allInfo/SET_EXAM',
  SET_ALL_QUESTIONS: 'allInfo/ALL_QUESTIONS'
};

const initialState = {
  exam: [
    {
        id: '111',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
        value: '0.25',
        answer: '0'
    },
    {
        id: '112',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vaavamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar elit. Curabitur metus nulla, rutrum se',
        value: '0.50',
        answer: '0'
    }
  ],
  allQuestions: [
    {
      id: '111',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '112',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '113',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '114',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '115',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '116',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '117',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '1'
    },
    {
      id: '118',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '119',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '1'
    },
    {
      id: '120',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '121',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '1'
    },
    {
      id: '122',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '123',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '1'
    },
    {
      id: '124',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '125',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
    {
      id: '126',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar eli. Curabitur metus nulla, rutrum se',
      value: '0.25',
      answer: '0'
    },
  ]  
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_EXAM:
      return { ...state, exam: action.payload };
    case Types.SET_ALL_QUESTIONS:
      return { ...state, allQuestions: action.payload };
    default:
      return state;
  }
};
export default reducer;

export const setExams = (exam) => {
  return {
    type: Types.SET_EXAM,
    payload: exam,
  };
};

export const setAllQuestions = (allQuestions) => {
  return {
    type: Types.SET_ALL_QUESTIONS,
    payload: allQuestions,
  };
};

