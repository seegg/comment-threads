
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        { id: 1, date: Date.parse('01/01/2022 12:30:00'), order: null, comment: 'this is comment 1, a new comment thread.' },
        { id: 2, date: Date.parse('01/01/2022 12:35:00'), order: '-1-', comment: 'this is comment 2, reply to comment 1.' },
        { id: 3, date: Date.parse('01/01/2022 12:36:00'), order: '-1-', comment: 'this is comment 3, reply to comment 1.' },
        { id: 4, date: Date.parse('01/01/2022 13:30:00'), order: '-1-3-', comment: 'this is comment 4, reply to comment 3.' },
        { id: 5, date: Date.parse('01/01/2022 13:33:00'), order: '-1-3-', comment: 'this is comment 5, reply to comment 3' },
        { id: 6, date: Date.parse('02/01/2022 06:30:00'), order: null, comment: 'this is comment 6, a new comment thread' },
        { id: 7, date: Date.parse('02/01/2022 07:30:00'), order: null, comment: 'this is comment 7, a new comment thread' },
        { id: 8, date: Date.parse('02/01/2022 12:30:00'), order: '-7-', comment: 'this is comment 8, a reply to comment 7' },
        { id: 9, date: Date.parse('02/01/2022 12:33:00'), order: '-7-8-', comment: 'this is comment 9 a reply to comment 8' },
        { id: 10, date: Date.parse('02/01/2022 12:40:00'), order: '-6-', comment: 'this is comment 10, a reply to comment 6' },
        { id: 11, date: Date.parse('02/01/2022 12:50:00'), order: '-1-3-4-', comment: 'this is comment 11, a reply to comment 4' },
        { id: 12, date: Date.parse('03/01/2022 12:30:00'), order: '-6-10-', comment: 'this is comment 12, a reply to comment 10' },
        { id: 13, date: Date.parse('03/01/2022 13:30:00'), order: '-1-3-4-11-', comment: 'this is comment 13, a reply to comment 11' },
        { id: 14, date: Date.parse('03/01/2022 20:30:00'), order: '-7-', comment: 'this is comment 14, a reply to comment 7.' },
        { id: 15, date: Date.parse('04/01/2022 06:30:00'), order: null, comment: 'this is comment 15, a new comment thread' },
        { id: 16, date: Date.parse('04/01/2022 08:30:00'), order: null, comment: 'this is comment 16, a new comment thread' },
        { id: 17, date: Date.parse('04/01/2022 12:30:00'), order: '-16-', comment: 'this is comment 17, a reply to comment 16' },
        { id: 18, date: Date.parse('05/01/2022 13:30:00'), order: '-16-', comment: 'this is comment 18, a reply to comment 16' },
        { id: 19, date: Date.parse('05/01/2022 14:30:00'), order: '-6-10-12-', comment: 'this is comment 19, a reply to comment 12' },
        { id: 20, date: Date.parse('05/01/2022 14:30:30'), order: '-16-', comment: 'this is comment 20, a reply to comment 16' },
        { id: 21, date: Date.parse('06/01/2022 12:30:00'), order: '-6-10-12-19-', comment: 'this is comment 21, a reply to comment 19' },
        { id: 22, date: Date.parse('07/01/2022 12:30:00'), order: '-7-14-', comment: 'this is comment 22, a reply to comment 14' },
        { id: 23, date: Date.parse('08/01/2022 12:30:00'), order: '-16-', comment: 'this is comment 23, a replyt to comment 16' },
      ]);
    });
};
