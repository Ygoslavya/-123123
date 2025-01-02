
const END_OF_MATCH_TIME = 1; // Изменено на 1 секунду
const VOTE_TIME = 1; // Изменено на 1 секунду

// константы
const EndTriggerPoints = 1000; // сколько дается очков за завершение маршрута
const InitialScore = 1000; // Начальное количество очков для игрока
const InitialSpawns = 1000; // Начальное количество спавнов для игрока

// ... (остальная часть кода остается без изменений)

// счетчик смертей
room.Damage.OnDeath.Add(function (player) {
    ++player.Properties.Deaths.Value;
});

// разрешаем вход в команду
room.Teams.OnRequestJoinTeam.Add(function (player, team) { 
    team.Add(player); 
    // Устанавливаем начальные значения для игрока
    player.Properties.Get(LeaderBoardProp).Value = InitialScore; // Установка начального количества очков
    player.Properties.Spawns.Value = InitialSpawns; // Установка начального количества спавнов
});

// разрешаем спавн
room.Teams.OnPlayerChangeTeam.Add(function (player) { 
    player.Spawns.Spawn(); 
});

// счетчик спавнов
room.Spawns.OnSpawn.Add(function (player) {
    ++player.Properties.Spawns.Value;
});

// ... (остальная часть кода остается без изменений)

// запуск игры
stateProp.Value = GameStateValue;
