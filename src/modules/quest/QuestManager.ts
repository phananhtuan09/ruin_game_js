export interface Quest {
  id: string;
  title: string;
  description: string;
  objectives: Objective[];
  completed: boolean;
}

export interface Objective {
  id: string;
  description: string;
  completed: boolean;
}

export class QuestManager {
  private quests: Map<string, Quest> = new Map();
  private activeQuests: Set<string> = new Set();

  constructor() {
    console.log('✅ QuestManager initialized');
  }

  public addQuest(quest: Quest): void {
    this.quests.set(quest.id, quest);
    this.activeQuests.add(quest.id);
  }

  public completeObjective(questId: string, objectiveId: string): void {
    const quest = this.quests.get(questId);
    if (!quest) return;

    const objective = quest.objectives.find((obj) => obj.id === objectiveId);
    if (objective) {
      objective.completed = true;
      // Check if all objectives completed
      if (quest.objectives.every((obj) => obj.completed)) {
        quest.completed = true;
        this.activeQuests.delete(questId);
      }
    }
  }

  public getActiveQuests(): Quest[] {
    return Array.from(this.activeQuests).map((id) => this.quests.get(id)!).filter(Boolean);
  }
}

export default QuestManager;
