const db = require("../models");

exports.initial = () => {
    db.role.create({
      id: 1,
      name: "user"
    });
   
    db.role.create({
      id: 2,
      name: "admin"
    });

    db.language.create({
        id: 1,
        name: "English"
    });
    db.language.create({
        id: 2,
        name: "Russian"
    });
    db.language.create({
        id: 3,
        name: "Ukrainian"
    });
    db.language.create({
        id: 4,
        name: "French"
    });
    db.language.create({
        id: 5,
        name: "Spanish"
    });
    db.language.create({
        id: 6,
        name: "Arab"
    });
    db.language.create({
        id: 7,
        name: "Portuguese"
    });
    db.language.create({
        id: 8,
        name: "German"
    });
    db.language.create({
        id: 9,
        name: "Chinese"
    });

    db.currency.create({
        id: 1,
        name: "$"
      });
      db.currency.create({
        id: 2,
        name: "€"
      });
      db.currency.create({
        id: 3,
        name: "£"
      });

      db.languageLevel.create({
        id: 1,
        name: "Beginner / Starter — A1 — ILR Level 0"
      });
      db.languageLevel.create({
        id: 2,
        name: "Elementary — A2 — ILR Level 1"
      });
      db.languageLevel.create({
        id: 3,
        name: "Pre-Intermediate — A2/B1"
      });
      db.languageLevel.create({
        id: 4,
        name: "Intermediate — B1 — ILR Level 2"
      });
      db.languageLevel.create({
        id: 5,
        name: "Upper-Intermediate — B2 — ILR Level 3"
      });
      db.languageLevel.create({
        id: 6,
        name: "Advanced — C1 — ILR Level 4"
      });
      db.languageLevel.create({
        id: 7,
        name: "Proficiency — C2 — ILR Level 5"
      });

      db.level.create({
        id: 1,
        name: "Junior"
    });
    db.level.create({
        id: 2,
        name: "Middle"
    });
    db.level.create({
        id: 3,
        name: "Senior"
    });

    db.levelOfEducation.create({
      id: 1,
      name: "Secondary vocational"
  });
  db.levelOfEducation.create({
      id: 2,
      name: "Undergraduate"
  });
  db.levelOfEducation.create({
      id: 3,
      name: "Magistracy"
  });
  db.levelOfEducation.create({
      id: 4,
      name: "Graduate school"
  });
  db.levelOfEducation.create({
      id: 5,
      name: "Doctoral studies"
  });

  db.skill.create({
    id: 1,
    name: "A.NET"
});
db.skill.create({
    id: 2,
    name: "A-0 System"
});
db.skill.create({
    id: 3,
    name: "A+"
});
db.skill.create({
    id: 4,
    name: "ABAP"
});
db.skill.create({
    id: 5,
    name: "ABC"
});
db.skill.create({
    id: 6,
    name: "ABC ALGOL"
});
db.skill.create({
    id: 7,
    name: "ACC"
});
db.skill.create({
    id: 8,
    name: "Accent"
});
db.skill.create({
    id: 9,
    name: "Ace DASL (Distributed Application Specification Language)"
});
db.skill.create({
  id: 10,
  name: "Action!"
});
db.skill.create({
  id: 11,
  name: "ActionScript"
});
db.skill.create({
  id: 12,
  name: "Actor"
});
db.skill.create({
  id: 13,
  name: "Ada"
});
db.skill.create({
  id: 14,
  name: "Adenine"
});
  
db.typeOfEmployment.create({
  id: 1,
  name: "Full-time"
});
db.typeOfEmployment.create({
  id: 2,
  name: "Part-time"
});
db.typeOfEmployment.create({
  id: 3,
  name: "Remote work"
});
db.typeOfEmployment.create({
  id: 4,
  name: "Internship"
});
}