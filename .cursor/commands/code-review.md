# Local Code Review Assistant

You are helping me perform a local code review **before** I push changes. Please follow this structured workflow.

## Step 1: Gather Context
Ask me for:
- Brief feature/branch description
- List of modified files (with optional summaries)
- Relevant design doc(s) (e.g., `docs/ai/design/feature-{name}.md` or project-level design)
- Any known constraints or risky areas
- Any open bugs or TODOs linked to this work
- Which tests have already been run

**Load Project Standards**: Read `docs/ai/project/CODE_CONVENTIONS.md` and `docs/ai/project/PROJECT_STRUCTURE.md`

If possible, request the latest diff:
```bash
git status -sb
git diff --stat
```

## Step 2: Understand Design Alignment
For each provided design doc:
- Summarize the architectural intent
- Note critical requirements, patterns, or constraints the design mandates

## Step 2.5: Verify Project Convention Compliance
Before detailed file review:
- Read `docs/ai/project/CODE_CONVENTIONS.md` completely
- Read `docs/ai/project/PROJECT_STRUCTURE.md` completely  
- Review all code against these conventions and flag any violations
- Reference specific sections when reporting non-compliance

## Step 3: File-by-File Review
For every modified file:
1. **Convention Compliance**: Check against CODE_CONVENTIONS.md and PROJECT_STRUCTURE.md
2. Highlight deviations from the referenced design or requirements
3. Spot potential logic or flow issues and edge cases
4. Identify redundant or duplicate code
5. Suggest simplifications or refactors (prefer clarity over cleverness)
6. Flag security concerns (input validation, secrets, auth, data handling)
7. Check for performance pitfalls or scalability risks
8. Ensure error handling, logging, and observability are appropriate
9. Note any missing comments or docs
10. Flag missing or outdated tests related to this file

## Step 4: Cross-Cutting Concerns
Review these areas and check against CODE_CONVENTIONS.md and PROJECT_STRUCTURE.md:
- **Convention Verification**: All code follows project conventions
- **Architecture Compliance**: ECS patterns, layer dependencies, module organization
- **Code Quality**: Documentation updated, tests added, configuration changes captured

## Step 5: Summarize Findings
Provide results in this structure:
```
### Summary
- Blocking issues: [count]
- Important follow-ups: [count]
- Nice-to-have improvements: [count]

### Detailed Notes
1. **[File or Component]**
   - Issue/Observation: ...
   - Impact: (e.g., blocking / important / nice-to-have)
   - Recommendation: ...
   - Convention reference: (CODE_CONVENTIONS.md section or PROJECT_STRUCTURE.md requirement)
   - Design reference: (design doc if applicable)

2. ... (repeat per finding)

**Note**: When flagging convention violations, reference specific sections from CODE_CONVENTIONS.md or PROJECT_STRUCTURE.md

### Recommended Next Steps
- [ ] Address blocking issues
- [ ] Update design/implementation docs if needed
- [ ] Add/adjust tests:
      - Unit:
      - Integration:
      - E2E:
- [ ] Rerun local test suite
- [ ] Re-run code review command after fixes
```

## Step 6: Final Checklist
Confirm whether each item is complete (yes/no/needs follow-up):
- Code follows CODE_CONVENTIONS.md and PROJECT_STRUCTURE.md
- Implementation matches design & requirements
- No obvious logic or edge-case gaps remain
- Redundant code removed or justified
- Security considerations addressed
- Tests cover new/changed behavior
- Documentation/design notes updated

---
Let me know when you're ready to begin the review.
