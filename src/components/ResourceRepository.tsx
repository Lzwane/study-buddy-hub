import { useState } from "react";
import { Search, FileText, BookOpen, ClipboardList, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type ResourceType = "all" | "past-paper" | "notes" | "assignment";

interface Resource {
  id: string;
  title: string;
  module: string;
  moduleCode: string;
  type: ResourceType;
  year?: string;
}

const resources: Resource[] = [
  { id: "1", title: "Final Exam 2024", module: "Business Management", moduleCode: "BMN101", type: "past-paper", year: "2024" },
  { id: "2", title: "Chapter 1-5 Summary Notes", module: "Business Management", moduleCode: "BMN101", type: "notes" },
  { id: "3", title: "Assignment 1 Practice", module: "Business Management", moduleCode: "BMN101", type: "assignment" },
  { id: "4", title: "June Exam 2024", module: "Accounting Principles", moduleCode: "ACP101", type: "past-paper", year: "2024" },
  { id: "5", title: "Full Module Notes", module: "Accounting Principles", moduleCode: "ACP101", type: "notes" },
  { id: "6", title: "Final Exam 2023", module: "Computer Science", moduleCode: "CSC201", type: "past-paper", year: "2023" },
  { id: "7", title: "Data Structures Notes", module: "Computer Science", moduleCode: "CSC201", type: "notes" },
  { id: "8", title: "Programming Assignment 2", module: "Computer Science", moduleCode: "CSC201", type: "assignment" },
  { id: "9", title: "Supplementary Exam 2024", module: "Mathematics", moduleCode: "MAT101", type: "past-paper", year: "2024" },
  { id: "10", title: "Calculus Chapter Notes", module: "Mathematics", moduleCode: "MAT101", type: "notes" },
  { id: "11", title: "Practice Problems Set 1", module: "Mathematics", moduleCode: "MAT101", type: "assignment" },
  { id: "12", title: "Final Exam 2024", module: "English Communication", moduleCode: "ENG101", type: "past-paper", year: "2024" },
  { id: "13", title: "Grammar & Writing Notes", module: "English Communication", moduleCode: "ENG101", type: "notes" },
  { id: "14", title: "Essay Assignment Practice", module: "English Communication", moduleCode: "ENG101", type: "assignment" },
  { id: "15", title: "Mid-year Exam 2023", module: "Law of Contract", moduleCode: "LAW201", type: "past-paper", year: "2023" },
  { id: "16", title: "Contract Law Summary", module: "Law of Contract", moduleCode: "LAW201", type: "notes" },
];

const typeConfig = {
  "past-paper": { label: "Past Paper", icon: FileText, color: "bg-primary/10 text-primary" },
  notes: { label: "Notes", icon: BookOpen, color: "bg-secondary/20 text-secondary" },
  assignment: { label: "Assignment", icon: ClipboardList, color: "bg-accent text-accent-foreground" },
};

const ResourceRepository = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ResourceType>("all");

  const filtered = resources.filter((r) => {
    const matchSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.module.toLowerCase().includes(search.toLowerCase()) ||
      r.moduleCode.toLowerCase().includes(search.toLowerCase());
    const matchType = filter === "all" || r.type === filter;
    return matchSearch && matchType;
  });

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-heading mb-3">Study Materials Repository</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search and access past papers, notes, and assignments for all modules.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by module name, code, or resource title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 rounded-xl text-base"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {(["all", "past-paper", "notes", "assignment"] as ResourceType[]).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === type
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {type === "all" ? "All" : typeConfig[type].label + "s"}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="h-10 w-10 mx-auto mb-3 opacity-40" />
              <p>No resources found. Try a different search term.</p>
            </div>
          ) : (
            filtered.map((resource) => {
              const config = typeConfig[resource.type as keyof typeof typeConfig];
              const Icon = config.icon;
              return (
                <div
                  key={resource.id}
                  className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-md transition-shadow group"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${config.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{resource.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {resource.moduleCode} — {resource.module}
                      {resource.year && ` • ${resource.year}`}
                    </p>
                  </div>
                  <Badge variant="secondary" className="shrink-0 hidden sm:inline-flex">
                    {config.label}
                  </Badge>
                  <button className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourceRepository;
