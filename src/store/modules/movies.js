import api from '@/api';

export default {
  namespaced: true,

  state: {
    //movies: [{"id":337167,"title":"Fifty Shades Freed","tagline":"Don't miss the climax","vote_average":6.1,"vote_count":1195,"release_date":"2018-02-07","poster_path":"https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg","overview":"Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.","budget":55000000,"revenue":136906000,"genres":["Drama","Romance"],"runtime":106},{"id":269149,"title":"Zootopia","tagline":"Welcome to the urban jungle.","vote_average":7.7,"vote_count":6795,"release_date":"2016-02-11","poster_path":"https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg","overview":"Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.","budget":150000000,"revenue":1023784195,"genres":["Animation","Adventure","Family","Comedy"],"runtime":108},{"id":181808,"title":"Star Wars: The Last Jedi","tagline":"The Saga Continues","vote_average":7.1,"vote_count":4732,"release_date":"2017-12-13","poster_path":"https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg","overview":"Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.","budget":200000000,"revenue":1325937250,"genres":["Fantasy","Adventure","Science Fiction"],"runtime":152},{"id":284054,"title":"Black Panther","tagline":"Long live the king","vote_average":7.3,"vote_count":3788,"release_date":"2018-02-13","poster_path":"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg","overview":"King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.","budget":200000000,"revenue":1245257672,"genres":["Action","Adventure","Fantasy","Science Fiction"],"runtime":134},{"id":354912,"title":"Coco","tagline":"The celebration of a lifetime","vote_average":7.8,"vote_count":3619,"release_date":"2017-10-27","poster_path":"https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg","overview":"Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.","budget":175000000,"revenue":700920729,"genres":["Adventure","Comedy","Family","Animation"],"runtime":105},{"id":333339,"title":"Ready Player One","tagline":"A better reality awaits.","vote_average":8.1,"vote_count":617,"release_date":"2018-03-28","poster_path":"https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg","overview":"When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.","budget":175000000,"revenue":0,"genres":["Adventure","Science Fiction","Action"],"runtime":140},{"id":338970,"title":"Tomb Raider","tagline":"Her legend begins","vote_average":6.2,"vote_count":817,"release_date":"2018-03-08","poster_path":"https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg","overview":"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.","budget":94000000,"revenue":126025000,"genres":["Action","Adventure"],"runtime":118},{"id":284053,"title":"Thor: Ragnarok","tagline":"No Hammer. No Problem.","vote_average":7.4,"vote_count":5349,"release_date":"2017-10-25","poster_path":"https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg","overview":"Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.","budget":180000000,"revenue":854229371,"genres":["Action","Adventure","Fantasy"],"runtime":130},{"id":321612,"title":"Beauty and the Beast","tagline":"Be our guest.","vote_average":6.8,"vote_count":7861,"release_date":"2017-03-16","poster_path":"https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg","overview":"A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.","budget":160000000,"revenue":1263521126,"genres":["Family","Fantasy","Romance"],"runtime":129},{"id":399055,"title":"The Shape of Water","tagline":"A Fairy Tale for Troubled Times","vote_average":7.3,"vote_count":3200,"release_date":"2017-12-01","poster_path":"https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg","overview":"An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.","budget":19500000,"revenue":185545281,"genres":["Drama","Fantasy","Romance"],"runtime":123},{"id":198663,"title":"The Maze Runner","tagline":"Remember. Survive. Run.","vote_average":7,"vote_count":7502,"release_date":"2014-09-10","poster_path":"https://image.tmdb.org/t/p/w500/coss7RgL0NH6g4fC2s5atvf3dFO.jpg","overview":"Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow "runners" for a shot at escape.","budget":34000000,"revenue":348300000,"genres":["Action","Mystery","Science Fiction","Thriller"],"runtime":113},{"id":141052,"title":"Justice League","tagline":"","vote_average":6.4,"vote_count":3960,"release_date":"2017-11-15","poster_path":"https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg","overview":"Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.","budget":500000000,"revenue":655894816,"genres":["Action","Adventure","Fantasy","Science Fiction"],"runtime":120},{"id":268896,"title":"Pacific Rim: Uprising","tagline":"Rise Up","vote_average":6,"vote_count":318,"release_date":"2018-03-21","poster_path":"https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg","overview":"It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.","budget":150000000,"revenue":150613316,"genres":["Action","Fantasy","Science Fiction","Adventure"],"runtime":111},{"id":24428,"title":"The Avengers","tagline":"Some assembly required.","vote_average":7.5,"vote_count":14093,"release_date":"2012-04-25","poster_path":"https://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg","overview":"When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!","budget":220000000,"revenue":1519557910,"genres":["Science Fiction","Action","Adventure"],"runtime":143},{"id":118340,"title":"Guardians of the Galaxy","tagline":"All heroes start somewhere.","vote_average":7.9,"vote_count":12376,"release_date":"2014-07-30","poster_path":"https://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg","overview":"Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.","budget":170000000,"revenue":773328629,"genres":["Action","Science Fiction","Adventure"],"runtime":121},{"id":335984,"title":"Blade Runner 2049","tagline":"There's still a page left.","vote_average":7.3,"vote_count":3955,"release_date":"2017-10-04","poster_path":"https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg","overview":"Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.","budget":150000000,"revenue":259239658,"genres":["Mystery","Science Fiction","Thriller"],"runtime":163},{"id":347882,"title":"Sleight","tagline":"You can change the cards you're dealt","vote_average":5.2,"vote_count":290,"release_date":"2017-04-28","poster_path":"https://image.tmdb.org/t/p/w500/wridRvGxDqGldhzAIh3IcZhHT5F.jpg","overview":"A young street magician is left to take care of his little sister after his mother's passing and turns to drug dealing in the Los Angeles party scene to keep a roof over their heads. When he gets into trouble with his supplier, his sister is kidnapped and he is forced to rely on both his sleight of hand and brilliant mind to save her.","budget":0,"revenue":0,"genres":["Drama","Thriller","Action","Science Fiction"],"runtime":89},{"id":300668,"title":"Annihilation","tagline":"Fear What's Inside.","vote_average":6.4,"vote_count":1291,"release_date":"2018-02-22","poster_path":"https://image.tmdb.org/t/p/w500/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg","overview":"A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.","budget":40000000,"revenue":13258603,"genres":["Mystery","Science Fiction","Drama"],"runtime":115},{"id":353486,"title":"Jumanji: Welcome to the Jungle","tagline":"The game has evolved.","vote_average":6.5,"vote_count":3330,"release_date":"2017-12-09","poster_path":"https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg","overview":"The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.","budget":90000000,"revenue":928901353,"genres":["Action","Adventure","Comedy","Family"],"runtime":119},{"id":245891,"title":"John Wick","tagline":"Don't set him off.","vote_average":7,"vote_count":7175,"release_date":"2014-10-22","poster_path":"https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg","overview":"Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.","budget":20000000,"revenue":88761661,"genres":["Action","Thriller"],"runtime":101},{"id":131631,"title":"The Hunger Games: Mockingjay - Part 1","tagline":"Fire burns brighter in the darkness","vote_average":6.7,"vote_count":7308,"release_date":"2014-11-18","poster_path":"https://image.tmdb.org/t/p/w500/gj282Pniaa78ZJfbaixyLXnXEDI.jpg","overview":"Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.","budget":125000000,"revenue":752100229,"genres":["Science Fiction","Adventure","Thriller"],"runtime":123},{"id":353616,"title":"Pitch Perfect 3","tagline":"Last Call Pitches","vote_average":6.4,"vote_count":727,"release_date":"2017-12-21","poster_path":"https://image.tmdb.org/t/p/w500/fchHLsLjFvzAFSQykiMwdF1051.jpg","overview":"After the highs of winning the world championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.","budget":45000000,"revenue":183600000,"genres":["Comedy","Music"],"runtime":93},{"id":99861,"title":"Avengers: Age of Ultron","tagline":"A New Age Has Come.","vote_average":7.3,"vote_count":8709,"release_date":"2015-04-22","poster_path":"https://image.tmdb.org/t/p/w500/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg","overview":"When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth's Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.","budget":280000000,"revenue":1405403694,"genres":["Action","Adventure","Science Fiction"],"runtime":141},{"id":45054,"title":"There Be Dragons","tagline":"","vote_average":4.9,"vote_count":69,"release_date":"2011-03-25","poster_path":"https://image.tmdb.org/t/p/w500/dKgPtWZkHkTeYQRvLTsO0RBYaQZ.jpg","overview":"Arising out of the horror of the Spanish Civil War, a candidate for canonization is investigated by a journalist who discovers his own estranged father had a deep, dark and devastating connection to the saint's life.While researching the life of Josemaria Escriva, the controversial founder of Opus Dei, the young journalist Robert uncovers hidden stories of his estranged father Manolo, and is taken on a journey through the dark, terrible secrets of his family's past.","budget":0,"revenue":0,"genres":["Drama"],"runtime":112}]
    movies: [],
    total: 0
  },

  mutations: {
    POPULATE_MOVIES(state, data) {
      console.log('POPULATE_MOVIES', data);
      state.movies = data.data;

      if (!state.total) {
        state.total = data.total;
      }
    }

  },

  actions: {
    async GET_MOVIES({commit}, {offset, limit}) {
      let res = await api.getMovies(offset, limit);
      console.log('GET_MOVIES', res);

      commit('POPULATE_MOVIES', res.data);
      return res;
    }
  },
};
