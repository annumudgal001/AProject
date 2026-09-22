import { Injectable, signal, computed } from '@angular/core';
import {
  PROFILE,
  NAV_ITEMS,
  EXPERIENCE,
  EDUCATION,
  SKILLS,
  SERVICES,
  PROJECTS,
  CERTIFICATIONS,
  REVIEWS,
  JOURNEY,
  THOUGHTS,
  PHILOSOPHY,
  PORTFOLIO_META,
} from '../data/portfolio.data';
import {
  Profile,
  Experience,
  Education,
  Skills,
  ServiceItem,
  Project,
  Certification,
  Review,
  JourneyEntry,
  Thought,
  Philosophy,
  PortfolioMeta,
  NavItem,
} from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  // Signals hold the static data. Later these become HTTP-driven.
  private readonly profileSignal = signal<Profile>(PROFILE);
  private readonly navSignal = signal<NavItem[]>(NAV_ITEMS);
  private readonly experienceSignal = signal<Experience[]>(EXPERIENCE);
  private readonly educationSignal = signal<Education[]>(EDUCATION);
  private readonly skillsSignal = signal<Skills>(SKILLS);
  private readonly servicesSignal = signal<ServiceItem[]>(SERVICES);
  private readonly projectsSignal = signal<Project[]>(PROJECTS);
  private readonly certificationsSignal = signal<Certification[]>(CERTIFICATIONS);
  private readonly reviewsSignal = signal<Review[]>(REVIEWS);
  private readonly journeySignal = signal<JourneyEntry[]>(JOURNEY);
  private readonly thoughtsSignal = signal<Thought[]>(THOUGHTS);
  private readonly philosophySignal = signal<Philosophy>(PHILOSOPHY);
  private readonly metaSignal = signal<PortfolioMeta>(PORTFOLIO_META);

  // Public read-only views
  readonly profile = this.profileSignal.asReadonly();
  readonly navItems = this.navSignal.asReadonly();
  readonly experience = this.experienceSignal.asReadonly();
  readonly education = this.educationSignal.asReadonly();
  readonly skills = this.skillsSignal.asReadonly();
  readonly services = this.servicesSignal.asReadonly();
  readonly projects = this.projectsSignal.asReadonly();
  readonly certifications = this.certificationsSignal.asReadonly();
  readonly reviews = this.reviewsSignal.asReadonly();
  readonly journey = this.journeySignal.asReadonly();
  readonly thoughts = this.thoughtsSignal.asReadonly();
  readonly philosophy = this.philosophySignal.asReadonly();
  readonly meta = this.metaSignal.asReadonly();

  readonly featuredProjects = computed(() => this.projects().slice(0, 3));

  getProjectById(id: string): Project | undefined {
    return this.projects().find((p) => p.id === id);
  }

  // Future: replace signal setters with HTTP + toSignal / switchMap
}