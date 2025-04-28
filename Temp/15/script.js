var app = new Vue({
    el: '#app',
    created: onCreate,
    data() {
      return {
        create: {},
        tasks: [{
          name: 'New sidebar design',
          estimate: '20:00:00',
          billed: '00:00:00',
          tracked: false,
          assigned: [{
            avatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
            role: 'UI Designer'
          }, {
            avatar: 'https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg',
            role: 'Developer'
          }]
        }, {
          name: 'Header design features',
          estimate: '20:00:00',
          billed: '00:00:00',
          tracked: false,
          assigned: [{
            avatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
            role: 'UI Designer'
          }, {
            avatar: 'https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg',
            role: 'Developer'
          }]
        }],
        inprogress: [{
          name: 'Login error',
          estimate: '20:00:00',
          billed: '04:10:00',
          tracked: false,
          assigned: [{
            avatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
            role: 'Frontend Dev'
          }, {
            avatar: 'https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg',
            role: 'QA Tester'
          }]
        }],
        review: [{
          name: 'Onboarding screens',
          estimate: '30:00:00',
          billed: '22:30:00',
          tracked: false,
          assigned: [{
            avatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
            role: 'UX Designer'
          }, {
            avatar: 'https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg',
            role: 'Product Manager'
          }]
        }, {
          name: 'Dashboard design',
          estimate: '30:00:00',
          billed: '22:30:00',
          tracked: false,
          assigned: [{
            avatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
            role: 'UI Designer'
          }, {
            avatar: 'https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg',
            role: 'Developer'
          }]
        }],
        approved: [{
          name: 'Account settings screen',
          estimate: '16:00:00',
          billed: '11:00:00',
          tracked: false,
          assigned: [{
            avatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
            role: 'UI Designer' 
          }, {
            avatar: 'https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg',
            role: 'Developer'
          }]
        }, {
          name: 'Mobile layout',
          estimate: '16:00:00',
          billed: '11:00:00',
          tracked: false,
          assigned: [{
            avatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
            role: 'Mobile Dev'
          }, {
            avatar: 'https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg',
            role: 'UX Designer'
          }]
        }, {
          name: 'On scroll header layout',
          estimate: '16:00:00',
          billed: '11:00:00',
          tracked: false,
          assigned: [{
            avatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
            role: 'Frontend Dev'
          }, {
            avatar: 'https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg',
            role: 'UI Designer'
          }]
        }]
      }
    },
    methods: {
      addIssue: function(key) {
        if (!this.create[key]) return;
        this[key].push({
          name: this.create[key],
          estimate: '00:00:00',
          billed: '00:00:00',
          tracked: false
        });
        this.create[key] = '';
      },
      trackTask: function(item) {
        item.tracked = true;
      },
      stopTask: function(item) {
        item.tracked = false;
      },
      displayMembers: function(people) {
        if (!people || !people.length) return [];
        
        const maxDisplayMembers = 7; // Maximum number to display before showing ellipsis
        return people.slice(0, maxDisplayMembers);
      },
      hasMoreMembers: function(people) {
        return people && people.length > 7;
      },
      getMoreMembersCount: function(people) {
        return people.length - 7;
      }
    }
  })
  
  function onCreate() {
    $(document).ready(() => {
      dragula([
        document.getElementById('tasks'),
        document.getElementById('inprogress'),
        document.getElementById('review'),
        document.getElementById('approved')
      ])
  
      .on('drag', function(el) {
        el.classList.add('is-moving');
      })
  
      .on('dragend', function(el) {
        el.classList.remove('is-moving');
        window.setTimeout(function() {
          el.classList.add('is-moved');
          window.setTimeout(function() {
            el.classList.remove('is-moved');
          }, 600);
        }, 100);
      });
    });
  }