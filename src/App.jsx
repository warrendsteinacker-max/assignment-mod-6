import React, { useState } from 'react';
import { BookOpen, Users, Lightbulb, ZoomIn, ZoomOut, Maximize2, BookMarked, Target, GraduationCap } from 'lucide-react';

const App = () => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const writingTypes = [
    {
      id: 'narrative',
      name: 'Narrative Writing',
      icon: BookOpen,
      colorClass: 'narrative-theme',
      description: "“Students retell familiar stories, develop sequels for stories they’ve read, write stories about events in their own lives, and create original stories” (Tompkins et al., 2021, p. 341).",
      grades: {
        K: {
          scaffolds: ['Story sequence cards with pictures', 'Beginning-middle-end story maps', 'Picture walk with verbal storytelling', 'Shared writing of class stories'],
          differentiation: {
            EL: 'Use visual story maps with native language labels; provide sentence frames like "First... Next... Last..."',
            Dyslexia: 'Allow audio recording of stories before writing; use larger spacing and dyslexia-friendly fonts',
            ADHD: 'Break story into small chunks with movement breaks; use timer for each story part',
            ASD: 'Provide social stories as models; use concrete, predictable story structures',
            Gifted: 'Encourage adding descriptive details and dialogue; introduce character development',
            LowProficiency: 'Start with drawing and labeling; use picture-only story sequences'
          },
          example: 'Create a class story map about a field trip using the beginning-middle-end framework. Students draw pictures for each section, then the teacher scribes their oral contributions during shared writing.'
        },
        '1': {
          scaffolds: ['Story grammar charts (characters, setting, problem, solution)', 'Mentor texts with clear narrative structure', 'Transition word anchor charts (first, then, next, finally)', 'Personal narrative planning webs'],
          differentiation: {
            EL: 'Provide bilingual word banks for key story elements; pair with fluent English-speaking peer',
            Dyslexia: 'Use graphic organizers with color-coded sections; provide word prediction software',
            ADHD: 'Use physical story stones or manipulatives to plan; provide fidget tools during writing',
            ASD: 'Offer visual schedules for the writing process; use preferred topics as story subjects',
            Gifted: 'Introduce figurative language and varied sentence structures; explore multiple perspectives',
            LowProficiency: 'Use a Somebody-Wanted-But-So-Then framework with heavy scaffolding'
          },
          example: 'After reading Owl Moon by Jane Yolen, students use a story grammar chart to plan their own personal narrative about a special experience with family.'
        },
        '2': {
          scaffolds: ['Plot mountain graphic organizers', 'Dialogue punctuation anchor charts', 'Sensory detail webs', 'Peer revision checklists', 'Story starter prompts'],
          differentiation: {
            EL: 'Provide sentence starters for each plot element; use cognates to build vocabulary',
            Dyslexia: 'Allow speech-to-text for drafting; provide editing checklists with one focus at a time',
            ADHD: 'Use writing templates with built-in breaks; allow choice of topics to increase engagement',
            ASD: 'Provide concrete examples of emotions and sensory details; use social narratives',
            Gifted: 'Encourage experimentation with flashbacks, foreshadowing, or multiple plot lines',
            LowProficiency: 'Use patterned story structures; provide complete sentence frames for each story part'
          },
          example: 'Students create a small moment narrative using a plot mountain organizer, mapping out rising action, climax, and resolution with sensory details.'
        },
        '3': {
          scaffolds: ['Character development maps', 'Narrative arc templates', 'Show-don\'t-tell revision guides', 'Writer\'s workshop conferencing forms', 'Genre-specific mentor texts'],
          differentiation: {
            EL: 'Use tiered vocabulary lists for descriptive language; provide translation tools for planning',
            Dyslexia: 'Offer assistive technology for editing; use colored overlays; provide extra time',
            ADHD: 'Break writing into daily micro-goals; use self-monitoring checklists',
            ASD: 'Provide detailed rubrics with concrete examples; allow alternative presentation formats',
            Gifted: 'Introduce advanced literary devices (symbolism, irony); explore cross-genre narratives',
            LowProficiency: 'Use highly structured story frames; focus on one writing trait at a time'
          },
          example: 'During writer\'s workshop, students develop a fictional narrative using a character map and study mentor texts to practice show-don\'t-tell techniques.'
        }
      }
    },
    {
      id: 'opinion',
      name: 'Opinion',
      icon: Target,
      colorClass: 'opinion-theme',
      description: 'Students present a clearly articulated position that is set in stone, which is relatable to persuasion. Thus, it can be derived from the persuasion writing genre because opinion is a part of it.',
      grades: {
        K: {
          scaffolds: ['Opinion sentence frames: "I think... because..."', 'Picture cards showing preferences', 'Class opinion graphs and charts', 'Shared opinion writing'],
          differentiation: {
            EL: 'Use visual supports for opinion words; provide native language opinion stems',
            Dyslexia: 'Limit writing to oral sharing with teacher scribing; use large print opinion words',
            ADHD: 'Keep opinion statements short and focused; allow movement while sharing',
            ASD: 'Use concrete topics with clear yes/no choices; provide visual examples',
            Gifted: 'Encourage multiple reasons; introduce counter-arguments at basic level',
            LowProficiency: 'Start with drawing opinion and one word/phrase; use picture choices'
          },
          example: 'After reading Don\'t Let the Pigeon Drive the Bus! students complete the frame “I think the pigeon should or should not drive the bus because..." and create a class opinion graph.'
        },
        '1': {
          scaffolds: ['Opinion-reason-example pyramids', 'Linking words anchor chart (because, and, also)', 'Persuasive word banks', 'Opinion writing checklists'],
          differentiation: {
            EL: 'Provide bilingual reason banks; use pictures to represent reasons',
            Dyslexia: 'Use color-coded organizers; reduce writing demands',
            ADHD: 'Use physical manipulatives to organize reasons; provide structured breaks',
            ASD: 'Offer concrete topics with clear right/wrong elements; use social stories about persuasion',
            Gifted: 'Require 3+ reasons with examples; introduce persuasive techniques like questions',
            LowProficiency: 'Provide complete sentence starters for each reason; limit to 2 reasons'
          },
          example: 'Students write an opinion piece about their favorite season using a pyramid organizer with opinion at top, three reasons in middle, and examples at bottom.'
        },
        '2': {
          scaffolds: ['OREO graphic organizer (Opinion-Reasons-Examples-Opinion)', 'Persuasive technique posters', 'Transition word lists', 'Peer debate protocols'],
          differentiation: {
            EL: 'Provide sentence frames for each OREO section; use collaborative writing',
            Dyslexia: 'Allow typed drafts; use text-to-speech for revision; provide editing supports',
            ADHD: 'Use checklist with one element per writing session; incorporate kinesthetic activities',
            ASD: 'Provide detailed examples of each OREO component; use literal, concrete topics',
            Gifted: 'Introduce counter-arguments and rebuttals; explore emotional vs. logical appeals',
            LowProficiency: 'Pre-fill parts of OREO organizer; focus on one strong reason with support'
          },
          example: 'After reading I Wanna Iguana, students use the OREO organizer to write a persuasive letter to their principal about a school improvement.'
        },
        '3': {
          scaffolds: ['Claim-evidence-reasoning frameworks', 'Persuasive appeals chart', 'Counter-argument planning sheets', 'Formal letter/essay formats', 'Research note-taking organizers'],
          differentiation: {
            EL: 'Provide academic language frames for claims and evidence; use mentor texts in L1 when possible',
            Dyslexia: 'Offer assistive technology throughout; use graphic organizers with minimal text',
            ADHD: 'Break into micro-tasks with immediate feedback; use timers and choice',
            ASD: 'Provide explicit instruction on audience awareness; use concrete evidence sources',
            Gifted: 'Require research-based evidence; explore sophisticated persuasive techniques',
            LowProficiency: 'Provide partially completed organizers; allow drawing to supplement text'
          },
          example: 'Students research a school issue and write a persuasive essay using claim-evidence-reasoning, including a counter-argument section with rebuttal.'
        }
      }
    },
    {
      id: 'informative',
      name: 'Informative/Expository',
      icon: BookMarked,
      colorClass: 'informative-theme',
      description: "“Students collect and synthesize information. This writing is objective; reports are the most common type. Students use expository writing to give directions, sequence steps, compare one thing to another, explain causes and effects, or describe problems and solutions”(Tompkins et al., 2021, p. 341). This is what the informative genre covers through expository genre norms, but the only thing is that expository “writing aims to explain or clarify a topic in detail, using facts and evidence, while informative writing simply provides useful knowledge or instructions without deep analysis” (reddit, 2026, para. 1).",
      grades: {
        K: {
          scaffolds: ['Labeled drawings and diagrams', 'Non-fiction all about book templates', 'Topic word banks with pictures', 'Shared research projects'],
          differentiation: {
            EL: 'Use picture dictionaries; provide native language resources; emphasize drawing',
            Dyslexia: 'Focus on oral information sharing; use teacher as scribe for labels',
            ADHD: 'Choose high-interest topics; keep projects brief with clear endpoints',
            ASD: 'Select concrete, familiar topics; provide visual models of completed projects',
            Gifted: 'Encourage multiple facts and categories; introduce basic research from books',
            LowProficiency: 'Start with single labeled picture; use pre-made vocabulary cards'
          },
          example: 'After studying butterflies, students create an All About Butterflies booklet with labeled diagrams using sentence frame: "Butterflies have ___."'
        },
        '1': {
          scaffolds: ['Main idea and details webs', 'Non-fiction text features anchor charts', 'Compare/contrast Venn diagrams', 'Simple research recording sheets', 'Topic sentence frames'],
          differentiation: {
            EL: 'Use dual-language informational texts; provide sentence starters for each detail',
            Dyslexia: 'Provide information in audio/video format; reduce copying demands',
            ADHD: 'Use graphic organizers with clear sections; allow topic choice',
            ASD: 'Provide explicit instruction on main idea vs. details; use color-coding',
            Gifted: 'Introduce multiple text features; encourage deeper research from varied sources',
            LowProficiency: 'Use pre-populated webs with picture support; limit to 3 details'
          },
          example: 'Students research an animal and create an informational poster with main idea web showing three details with supporting facts and text features.'
        },
        '2': {
          scaffolds: ['Paragraph hamburger organizers', 'Cause and effect charts', 'Sequence/process flow charts', 'Research question templates', 'Citation basics'],
          differentiation: {
            EL: 'Provide content-specific vocabulary lists; use collaborative research groups',
            Dyslexia: 'Allow alternative formats (poster, digital slideshow); use speech-to-text',
            ADHD: 'Break research into daily mini-tasks; use interactive note-taking',
            ASD: 'Provide structured research templates; use concrete topics with clear categories',
            Gifted: 'Require synthesis from 3+ sources; introduce compare/contrast across topics',
            LowProficiency: 'Use sentence frames for each paragraph part; provide simplified text'
          },
          example: 'Students write an informational paragraph about a natural disaster using the hamburger model with topic sentence, 3-4 detail sentences, and conclusion.'
        },
        '3': {
          scaffolds: ['Multi-paragraph essay outlines', 'Research note-taking systems', 'Problem-solution matrices', 'Text structure signal words charts', 'Citation guides', 'Paraphrasing instruction'],
          differentiation: {
            EL: 'Teach academic language for informational writing; provide mentor texts with clear structure',
            Dyslexia: 'Offer assistive technology for research and writing; provide audio books as sources',
            ADHD: 'Use project timelines with checkpoints; incorporate multimedia research',
            ASD: 'Provide explicit models of each paragraph type; use graphic organizers throughout',
            Gifted: 'Require integration of multiple text structures; explore primary vs. secondary sources',
            LowProficiency: 'Provide heavily scaffolded templates; focus on one text structure at a time'
          },
          example: 'Students research a historical figure and write a multi-paragraph report using different text structures for each paragraph with a simple bibliography.'
        }
      }
    },
    {
      id: 'persuasive',
      name: 'Persuasive',
      icon: GraduationCap,
      colorClass: 'persuasive-theme',
      description: "“Students present a clearly articulated position on a debatable issue, such as whether kids should be allowed to play football or how schools should address bullying. They cite evidence to support their claims and consider the other side’s viewpoint”(Tompkins et al., 2021, p. 341).",
      grades: {
        K: {
          scaffolds: ['Simple choice boards with pictures', 'Shared persuasive read-alouds', 'Role-play scenarios', 'Persuasive word posters'],
          differentiation: {
            EL: 'Use visual cues for persuasive intent; model persuasive language in simple contexts',
            Dyslexia: 'Focus on oral persuasion skills; minimal writing demands',
            ADHD: 'Use engaging, concrete scenarios; keep practice sessions brief',
            ASD: 'Teach explicit lessons on persuading vs. demanding; use social narratives',
            Gifted: 'Encourage reasoning beyond simple preference; introduce idea of audience',
            LowProficiency: 'Start with yes/no persuasive choices with picture support'
          },
          example: 'After reading "Should I Share My Ice Cream?" students role-play scenarios where they persuade a friend to share using please and because.'
        },
        '1': {
          scaffolds: ['Persuasive vs. opinion comparison charts', 'Audience identification worksheets', 'Reason strength rating activities', 'Persuasive letter templates', 'Emotional appeal word banks'],
          differentiation: {
            EL: 'Provide bilingual persuasive vocabulary; use pictures to show audience',
            Dyslexia: 'Use visual organizers for arguments; reduce writing load with templates',
            ADHD: 'Choose high-interest persuasive topics; use interactive activities',
            ASD: 'Explicitly teach perspective-taking for audience awareness; use concrete examples',
            Gifted: 'Introduce credibility and trustworthiness; compare strong vs. weak reasons',
            LowProficiency: 'Focus on one strong reason; use complete sentence frames throughout'
          },
          example: 'Students write a persuasive letter to parents about extending bedtime, practicing audience awareness and using persuasive phrases.'
        },
        '2': {
          scaffolds: ['Persuasive appeals introduction', 'Strong vs. weak evidence sorting', 'Call-to-action sentence starters', 'Audience analysis questions', 'Persuasive technique identification'],
          differentiation: {
            EL: 'Provide sentence frames for each appeal type; use collaborative discussions',
            Dyslexia: 'Allow alternative formats (speech, video); use assistive technology',
            ADHD: 'Use persuasive debates with movement; break writing into small chunks',
            ASD: 'Provide concrete examples of each persuasive appeal; use structured formats',
            Gifted: 'Require multiple types of appeals in one piece; analyze effectiveness',
            LowProficiency: 'Use pre-identified evidence; provide models for each element'
          },
          example: 'Students write a persuasive advertisement for a school fundraiser, identifying their audience and choosing 2-3 persuasive appeals with clear call to action.'
        },
        '3': {
          scaffolds: ['Ethos-pathos-logos triangle organizers', 'Rhetorical question guides', 'Evidence evaluation rubrics', 'Counter-argument frameworks', 'Persuasive speech outlines', 'Audience-specific language charts'],
          differentiation: {
            EL: 'Teach rhetorical devices with multilingual examples; provide academic language support',
            Dyslexia: 'Offer full assistive technology suite; provide audio mentor texts',
            ADHD: 'Use debate format with physical movement; provide choice in topics and formats',
            ASD: 'Explicitly teach rhetorical devices with concrete examples; provide detailed rubrics',
            Gifted: 'Introduce advanced rhetoric; analyze historical speeches; create multimedia campaigns',
            LowProficiency: 'Provide models for each rhetorical device; use simplified frameworks'
          },
          example: 'Students create a persuasive speech about a community issue using ethos-pathos-logos framework, incorporating rhetorical devices and addressing counter-arguments.'
        }
      }
    }
  ];

  const grades = ['K', '1', '2', '3'];
  const learnerTypes = [
    { key: 'EL', label: 'English Learners', icon: '🌐' },
    { key: 'Dyslexia', label: 'Dyslexia', icon: '📖' },
    { key: 'ADHD', label: 'ADHD', icon: '⚡' },
    { key: 'ASD', label: 'Autism Spectrum', icon: '🧩' },
    { key: 'Gifted', label: 'Gifted', icon: '⭐' },
    { key: 'LowProficiency', label: 'Low Proficiency', icon: '📝' }
  ];

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="container-root">
      <style>{`
        .container-root {
          min-height: 100vh;
          background-color: #f1f5f9;
          padding: 1rem;
          font-family: system-ui, -apple-system, sans-serif;
          user-select: none;
        }

        .header-section {
          max-width: 1400px;
          margin: 0 auto 1.5rem auto;
          background: linear-gradient(to right, #4f46e5, #9333ea);
          color: white;
          padding: 1.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .header-section h1 {
          margin: 0;
          font-size: 1.875rem;
          font-weight: 700;
        }

        .controls-bar {
          max-width: 1400px;
          margin: 0 auto 1rem auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 0.75rem;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .btn-group { display: flex; gap: 0.5rem; }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
          color: white;
        }

        .btn-primary { background-color: #4f46e5; }
        .btn-primary:hover { background-color: #4338ca; }
        .btn-secondary { background-color: #475569; }
        .btn-secondary:hover { background-color: #334155; }

        .table-viewport {
          max-width: 1400px;
          margin: 0 auto;
          background: white;
          border-radius: 0.75rem;
          border: 1px solid #cbd5e1;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          position: relative;
          overflow: hidden;
          height: calc(100vh - 350px);
        }

        .panning-container {
          width: 100%;
          height: 100%;
          overflow: auto;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
        }

        thead {
          position: sticky;
          top: 0;
          z-index: 20;
        }

        th {
          padding: 1rem;
          border-right: 1px solid;
          border-bottom: 1px solid;
          text-align: center;
        }

        .th-main { background-color: #3730a3; color: white; border-color: #312e81; text-align: left; width: 250px; }
        .th-grade { background-color: #4338ca; color: white; border-color: #3730a3; min-width: 320px; font-size: 1.125rem; }

        .category-header { padding: 1.25rem; color: white; }
        .category-header-content { display: flex; align-items: flex-start; gap: 1rem; }
        .icon-box { padding: 0.5rem; background: rgba(255,255,255,0.2); border-radius: 0.5rem; }

        .narrative-theme { background-color: #3b82f6; }
        .narrative-light { background-color: #eff6ff; }
        .opinion-theme { background-color: #22c55e; }
        .opinion-light { background-color: #f0fdf4; }
        .informative-theme { background-color: #a855f7; }
        .informative-light { background-color: #faf5ff; }
        .persuasive-theme { background-color: #f97316; }
        .persuasive-light { background-color: #fff7ed; }

        .cell-label { 
          padding: 1rem; 
          border-right: 1px solid #e2e8f0; 
          border-bottom: 1px solid #e2e8f0; 
          font-weight: 700; 
          color: #1e293b;
        }

        .cell-data {
          padding: 1rem;
          border-right: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          vertical-align: top;
          background: white;
        }

        .list-unstyled { list-style: none; padding: 0; margin: 0; }
        .list-unstyled li { display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.25rem; font-size: 0.875rem; color: #334155; }

        .differentiation-row td { background-color: #f8fafc; font-size: 0.875rem; }
        .text-xs { font-size: 0.75rem; color: #475569; }

        .example-cell { background-color: rgba(255, 251, 235, 0.3); font-style: italic; font-size: 0.875rem; color: #334155; }

        .references-section { max-width: 1400px; margin: 1.5rem auto 0 auto; display: flex; flex-direction: column; gap: 1rem; }
        .ref-card { background: white; padding: 1.25rem; border-radius: 0.75rem; border-left: 8px solid; shadow: 0 4px 6px rgba(0,0,0,0.05); }

        .bullet-narrative { color: #3b82f6; }
        .bullet-opinion { color: #22c55e; }
        .bullet-informative { color: #a855f7; }
        .bullet-persuasive { color: #f97316; }
      `}</style>

      {/* Header */}
      <div className="header-section">
        <h1>Scaffolding K–3 Writing Across Genres</h1>
        <p style={{ color: '#e0e7ff', fontSize: '0.875rem', marginTop: '0.25rem' }}>A Comprehensive Framework for Supporting Diverse Learners</p>
      </div>

      {/* Controls */}
      <div className="controls-bar">
        <div className="btn-group">
          <button onClick={handleZoomIn} className="btn btn-primary"><ZoomIn size={18} /> Zoom In</button>
          <button onClick={handleZoomOut} className="btn btn-primary"><ZoomOut size={18} /> Zoom Out</button>
          <button onClick={handleReset} className="btn btn-secondary"><Maximize2 size={18} /> Reset View</button>
        </div>
        <div style={{ color: '#64748b', fontSize: '0.875rem', fontStyle: 'italic' }}>
          💡 Click and drag to pan • Use zoom buttons to adjust size
        </div>
      </div>

      {/* Table Container */}
      <div className="table-viewport">
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="panning-container"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            style={{
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              transformOrigin: 'top left',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out'
            }}
          >
            <table>
              <thead>
                <tr>
                  <th className="th-main">Type & Description</th>
                  {grades.map(grade => (
                    <th key={grade} className="th-grade">Grade {grade}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {writingTypes.map((type) => (
                  <React.Fragment key={type.id}>
                    {/* Category Header Row */}
                    <tr>
                      <td colSpan={grades.length + 1} className={`category-header ${type.colorClass}`}>
                        <div className="category-header-content">
                          <div className="icon-box"><type.icon size={28} /></div>
                          <div style={{ flex: 1 }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.25rem 0' }}>{type.name}</h2>
                            <p style={{ fontSize: '0.875rem', lineHeight: 1.5, opacity: 0.95, margin: 0 }}>{type.description}</p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Scaffolding Row */}
                    <tr>
                      <td className={`cell-label ${type.id}-light`}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <BookOpen size={18} style={{ color: '#4f46e5' }} />
                          <span>Key Scaffolding Strategies</span>
                        </div>
                      </td>
                      {grades.map(grade => (
                        <td key={grade} className="cell-data">
                          <ul className="list-unstyled">
                            {type.grades[grade].scaffolds.map((scaffold, idx) => (
                              <li key={idx}>
                                <span className={`bullet-${type.id}`} style={{ fontWeight: 'bold' }}>•</span>
                                <span>{scaffold}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Differentiation Rows */}
                    {learnerTypes.map(learner => (
                      <tr key={learner.key} className="differentiation-row">
                        <td className="cell-label" style={{ fontWeight: 600, background: '#f8fafc' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                            <span>{learner.icon}</span>
                            <span>{learner.label}</span>
                          </div>
                        </td>
                        {grades.map(grade => (
                          <td key={grade} className="cell-data">
                            <p className="text-xs">{type.grades[grade].differentiation[learner.key]}</p>
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Example Row */}
                    <tr>
                      <td className={`cell-label ${type.id}-light`}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Lightbulb size={18} style={{ color: '#f59e0b' }} />
                          <span>Classroom Example</span>
                        </div>
                      </td>
                      {grades.map(grade => (
                        <td key={grade} className="cell-data example-cell">
                          {type.grades[grade].example}
                        </td>
                      ))}
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="references-section">
        <div className="ref-card" style={{ borderLeftColor: '#4f46e5' }}>
          <h3 style={{ fontWeight: 700, color: '#1e293b', margin: '0 0 0.5rem 0' }}>Reference</h3>
          <p style={{ fontSize: '0.875rem', color: '#334155', margin: 0 }}>
            Tompkins, G. E., Rodgers, E., & Rodgers, A. (2021). <em>Literacy for the 21st century</em> (8th ed.). 
            Pearson Education (US). https://reader.yuzu.com/books/9780135893401
          </p>
        </div>
        <div className="ref-card" style={{ borderLeftColor: '#9333ea' }}>
          <h3 style={{ fontWeight: 700, color: '#1e293b', margin: '0 0 0.5rem 0' }}>Reference</h3>
          <p style={{ fontSize: '0.875rem', color: '#334155', margin: 0 }}>
            reddit(2026). <em>Expository or Informative? The Subtle Distinction Experts Never Ignore</em> .https://www.reddit.com/r/study/comments/1hazjyl/expository_or_informative_the_subtle_distinction/#:~:text=Expository%20and%20informative%20essays%20may,more%20at%20Write%20Essay%20Today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
