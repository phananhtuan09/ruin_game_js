export enum AiBehaviorType {
  IDLE = 'idle',
  PATROL = 'patrol',
  CHASE = 'chase',
  ATTACK = 'attack',
  FLEE = 'flee',
}

export class AiComponent {
  public behavior: AiBehaviorType;
  public targetId?: string;
  public state: Record<string, any>;

  constructor(behavior: AiBehaviorType = AiBehaviorType.IDLE) {
    this.behavior = behavior;
    this.state = {};
  }
}

export default AiComponent;
