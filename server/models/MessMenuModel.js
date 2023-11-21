import mongoose, { Schema } from "mongoose";

const MessMenuSchema = new Schema({
  HostelName: {
    type: String,
    required: true,
    unique: true,
  },
  Menu: {
    Sunday: {
      Breakfast: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Lunch: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
      Snacks: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Dinner: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
    },
    Monday: {
      Breakfast: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Lunch: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
      Snacks: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Dinner: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
    },
    Tuesday: {
      Breakfast: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Lunch: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
      Snacks: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Dinner: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
    },
    Wednesday: {
      Breakfast: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Lunch: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
      Snacks: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Dinner: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
    },
    Thursday: {
      Breakfast: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Lunch: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
      Snacks: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Dinner: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
    },
    Friday: {
      Breakfast: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Lunch: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
      Snacks: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Dinner: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
    },
    Saturday: {
      Breakfast: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Lunch: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
      Snacks: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
      },
      Dinner: {
        item1: {
          type: String,
          required: true,
        },
        item2: {
          type: String,
          required: true,
        },
        item3: {
          type: String,
          required: true,
        },
        item4: {
          type: String,
          required: true,
        },
      },
    },
  },
});

export const MessMenuModel = mongoose.model("Messmenu", MessMenuSchema);
