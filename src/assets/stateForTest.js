const stateForTest = {
    session: {
      nickname: 'test@test.com',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDg2NDA1ODQyZDczYzdjZGIzMGM1NDEiLCJpYXQiOjE1Njk2ODQ1MDR9.0ABqeJFHXG0oyPYpCzJ5Tb6pbewfevrNwVl4oZfKuX8',
      error: null,
      _persist: {
        version: -1,
        rehydrated: true
      }
    },
    userTasks: {
      tasks: [
        {
          _id: '5d8f763b7311644a6e501772',
          title: 'Sunt aut facere repellat provident occaecati',
          description: 'ййййййййййй',
          dates: [
            {
              isComplete: false,
              _id: '5d8f763b7311644a6e501773',
              date: '2019-09-25T22:00:00.000Z'
            }
          ],
          isRepeat: false
        },
        {
          _id: '5d8f79697311644a6e501774',
          title: 'Привет',
          description: 'Ghbdtn',
          dates: [
            {
              isComplete: false,
              _id: '5d8f79697311644a6e501775',
              date: '2019-09-25T22:00:00.000Z'
            }
          ],
          isRepeat: false
        },
        {
          _id: '5d8f7c7f7311644a6e501780',
          title: 'asdasd',
          description: 'asdasdasd',
          dates: [
            {
              isComplete: false,
              _id: '5d8f7c7f7311644a6e501781',
              date: '2019-09-25T22:00:00.000Z'
            }
          ],
          isRepeat: false
        },
        {
          _id: '5d8f7ca3dfaac2437dd45d2d',
          title: 'test task 1',
          description: 'descr',
          dates: [
            {
              isComplete: false,
              _id: '5d8f7ca3dfaac2437dd45d2e',
              date: '2019-09-25T21:00:00.000Z'
            }
          ],
          isRepeat: false
        },
        {
          _id: '5d8f7cd1dfaac2437dd45d2f',
          title: 'test task 2',
          description: 'descr one',
          dates: [
            {
              isComplete: true,
              _id: '5d8f7cd1dfaac2437dd45d30',
              date: '2019-09-26T21:00:00.000Z'
            }
          ],
          isRepeat: false
        },
        {
          _id: '5d8f7cf2dfaac2437dd45d31',
          title: 'test task 2',
          description: 'descr one',
          dates: [
            {
              isComplete: false,
              _id: '5d8f7cf2dfaac2437dd45d33',
              date: '2019-09-26T21:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7cf2dfaac2437dd45d32',
              date: '2019-09-27T21:00:00.000Z'
            }
          ],
          isRepeat: true
        },
        {
          _id: '5d8f7cfb7311644a6e501782',
          title: 'Stanislav',
          description: 'Stanislav',
          dates: [
            {
              isComplete: false,
              _id: '5d8f7cfb7311644a6e501783',
              date: '2019-09-25T22:00:00.000Z'
            }
          ],
          isRepeat: false
        },
        {
          _id: '5d8f7d277311644a6e501784',
          title: 'qqqqq',
          description: 'eeeeeeeeeeee',
          dates: [
            {
              isComplete: false,
              _id: '5d8f7d277311644a6e501785',
              date: '2019-09-25T22:00:00.000Z'
            }
          ],
          isRepeat: false
        },
        {
          _id: '5d8f7d56dfaac2437dd45d34',
          title: 'test task 3',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis iusto voluptate delectus officia vero enim fuga velit cumque nulla soluta labore suscipit ad magni, incidunt tempore nemo ab iste?',
          dates: [
            {
              isComplete: false,
              _id: '5d8f7d56dfaac2437dd45d36',
              date: '2019-09-26T18:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7d56dfaac2437dd45d35',
              date: '2019-09-28T18:00:00.000Z'
            }
          ],
          isRepeat: true
        },
        {
          _id: '5d8f7d61dfaac2437dd45d37',
          title: 'test task 4',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis iusto voluptate delectus officia vero enim fuga velit cumque nulla soluta labore suscipit ad magni, incidunt tempore nemo ab iste?',
          dates: [
            {
              isComplete: false,
              _id: '5d8f7d61dfaac2437dd45d39',
              date: '2019-09-23T18:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7d61dfaac2437dd45d38',
              date: '2019-09-25T18:00:00.000Z'
            }
          ],
          isRepeat: true
        },
        {
          _id: '5d8f7d6adfaac2437dd45d3a',
          title: 'test task 5',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis iusto voluptate delectus officia vero enim fuga velit cumque nulla soluta labore suscipit ad magni, incidunt tempore nemo ab iste?',
          dates: [
            {
              isComplete: false,
              _id: '5d8f7d6adfaac2437dd45d3c',
              date: '2019-09-29T18:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7d6adfaac2437dd45d3b',
              date: '2019-09-30T18:00:00.000Z'
            }
          ],
          isRepeat: true
        },
        {
          _id: '5d8f7da7dfaac2437dd45d3d',
          title: 'test task 6',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis iusto voluptate delectus officia vero enim fuga velit cumque nulla soluta labore suscipit ad magni, incidunt tempore nemo ab iste?',
          dates: [
            {
              isComplete: true,
              _id: '5d8f7da7dfaac2437dd45d44',
              date: '2019-10-01T18:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7da7dfaac2437dd45d43',
              date: '2019-10-02T18:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7da7dfaac2437dd45d42',
              date: '2019-10-03T18:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7da7dfaac2437dd45d41',
              date: '2019-10-04T18:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7da7dfaac2437dd45d40',
              date: '2019-10-05T18:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7da7dfaac2437dd45d3f',
              date: '2019-10-06T18:00:00.000Z'
            },
            {
              isComplete: false,
              _id: '5d8f7da7dfaac2437dd45d3e',
              date: '2019-10-07T18:00:00.000Z'
            }
          ],
          isRepeat: true
        }
      ],
      loader: false,
      error: null
    },
    form: {
      title: '',
      description: '',
      error: null,
      loader: false
    },
    modal: {
      modal: false,
      modalInfo: false,
      modalCalendar: false,
      modalDelete: false
    },
    id: ''
  }


export default stateForTest;