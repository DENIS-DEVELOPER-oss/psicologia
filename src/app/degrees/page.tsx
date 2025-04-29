
'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Award, Download, Mail, Printer, Search, ListFilter, ArrowUpDown } from "lucide-react";
import { cn } from '@/lib/utils';

type Status = "Finalizado" | "En curso" | "Pendiente";

interface Student {
  id: number;
  name: string;
  email: string;
  degreeStatus: Status;
  titleStatus: Status;
  overallProgress: number; // Percentage
}

// Placeholder data for students
const studentsData: Student[] = [
  { id: 1, name: "Luis Vargas Mendoza", email: "luis.vargas@example.com", degreeStatus: "Finalizado", titleStatus: "En curso", overallProgress: 75 },
  { id: 2, name: "Carmen Sánchez Rojas", email: "carmen.sanchez@example.com", degreeStatus: "Finalizado", titleStatus: "Finalizado", overallProgress: 100 },
  { id: 3, name: "Javier Quispe Mamani", email: "javier.quispe@example.com", degreeStatus: "En curso", titleStatus: "Pendiente", overallProgress: 50 },
  { id: 4, name: "Ana Luz Condori", email: "ana.condori@example.com", degreeStatus: "Finalizado", titleStatus: "En curso", overallProgress: 80 },
  { id: 5, name: "Miguel Ángel Huamán", email: "miguel.huaman@example.com", degreeStatus: "Pendiente", titleStatus: "Pendiente", overallProgress: 20 },
  { id: 6, name: "Sofia Elena Castro", email: "sofia.castro@example.com", degreeStatus: "En curso", titleStatus: "En curso", overallProgress: 65 },
  { id: 7, name: "Ricardo José Pérez", email: "ricardo.perez@example.com", degreeStatus: "Finalizado", titleStatus: "Finalizado", overallProgress: 100 },
  { id: 8, name: "Valeria Luna Gómez", email: "valeria.luna@example.com", degreeStatus: "Pendiente", titleStatus: "Pendiente", overallProgress: 15 },
];

// Helper function to get badge variant based on status
const getBadgeVariant = (status: Status): "default" | "secondary" | "destructive" | "outline" => {
  switch (status) {
    case "Finalizado":
      return "default"; // Using primary color for finished
    case "En curso":
      return "secondary"; // Using secondary for in progress
    case "Pendiente":
      return "destructive"; // Using destructive for pending
    default:
      return "outline";
  }
};

// Helper function to get Badge classes for specific colors matching the image
const getStatusBadgeClass = (status: Status): string => {
    switch (status) {
        case "Finalizado":
            return "bg-green-100 text-green-800 border-green-300 hover:bg-green-200"; // Light green
        case "En curso":
            return "bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200"; // Light yellow
        case "Pendiente":
            return "bg-red-100 text-red-800 border-red-300 hover:bg-red-200"; // Light red
        default:
            return "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"; // Default gray
    }
};

// Helper function to get progress bar color based on status
const getProgressColorClass = (progress: number): string => {
  if (progress === 100) return "bg-green-500"; // Green for completed
  if (progress >= 50) return "bg-yellow-500"; // Yellow for in progress
  return "bg-red-500"; // Red for pending/low progress
};

export default function DegreesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos'); // 'todos', 'finalizado', 'en_curso', 'pendiente'
  const [sortOrder, setSortOrder] = useState('nombre_az'); // 'nombre_az', 'nombre_za', 'progreso_asc', 'progreso_desc'

  // --- Filtering and Sorting Logic ---
  const filteredAndSortedStudents = studentsData
    .filter(student => {
      // Search filter
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            student.email.toLowerCase().includes(searchTerm.toLowerCase());

      // Status filter
      let matchesStatus = true;
      if (statusFilter !== 'todos') {
          const filterStatusMapped = statusFilter.replace('_', ' '); // Convert 'en_curso' to 'en curso' etc.
          matchesStatus = student.degreeStatus.toLowerCase() === filterStatusMapped ||
                          student.titleStatus.toLowerCase() === filterStatusMapped ||
                          (statusFilter === 'finalizado' && student.degreeStatus === 'Finalizado' && student.titleStatus === 'Finalizado') ||
                          (statusFilter === 'pendiente' && (student.degreeStatus === 'Pendiente' || student.titleStatus === 'Pendiente')) ||
                          (statusFilter === 'en_curso' && (student.degreeStatus === 'En curso' || student.titleStatus === 'En curso'));
       }


      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortOrder) {
        case 'nombre_az':
          return a.name.localeCompare(b.name);
        case 'nombre_za':
          return b.name.localeCompare(a.name);
        case 'progreso_asc':
          return a.overallProgress - b.overallProgress;
        case 'progreso_desc':
          return b.overallProgress - a.overallProgress;
        default:
          return 0;
      }
    });

   // --- Statistical Summary Calculation ---
    const totalStudents = studentsData.length;
    const gradosFinalizados = studentsData.filter(s => s.degreeStatus === "Finalizado").length;
    const titulosFinalizados = studentsData.filter(s => s.titleStatus === "Finalizado").length;
    const progresoGrados = totalStudents > 0 ? Math.round((gradosFinalizados / totalStudents) * 100) : 0;
    const progresoTitulos = totalStudents > 0 ? Math.round((titulosFinalizados / totalStudents) * 100) : 0;


  return (
    <div className="container py-12 md:py-16 lg:py-20"> {/* Removed px-4 md:px-6 */}
      <header className="mb-8 md:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
                <Award className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-primary">
                  Grados y Títulos
                </h1>
            </div>
            {/* Maybe add a description or subtitle here */}
         </div>
      </header>

      {/* Filter Controls */}
      <Card className="mb-8 shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar estudiante (nombre o email)..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar estudiante"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full" aria-label="Filtrar por estado">
                 <ListFilter className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los estados</SelectItem>
                <SelectItem value="finalizado">Finalizado (Ambos)</SelectItem>
                <SelectItem value="en_curso">En curso (Grado o Título)</SelectItem>
                <SelectItem value="pendiente">Pendiente (Grado o Título)</SelectItem>
              </SelectContent>
            </Select>
             <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-full" aria-label="Ordenar por">
                <ArrowUpDown className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nombre_az">Nombre (A-Z)</SelectItem>
                <SelectItem value="nombre_za">Nombre (Z-A)</SelectItem>
                <SelectItem value="progreso_desc">Progreso (Mayor a Menor)</SelectItem>
                <SelectItem value="progreso_asc">Progreso (Menor a Mayor)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>


      {/* Main Table */}
       <Card className="shadow-md overflow-hidden">
          <div className="overflow-x-auto">
           <Table>
             <TableHeader className="bg-muted/50">
               <TableRow>
                 <TableHead className="w-[35%] py-3 px-4">Nombre</TableHead>
                 <TableHead className="w-[15%] text-center py-3 px-4">Grado</TableHead>
                 <TableHead className="w-[15%] text-center py-3 px-4">Título</TableHead>
                 <TableHead className="w-[35%] text-center py-3 px-4">Estado General</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
                {filteredAndSortedStudents.length > 0 ? (
                 filteredAndSortedStudents.map((student) => (
                   <TableRow key={student.id} className="hover:bg-muted/20 transition-colors">
                     <TableCell className="py-3 px-4">
                       <div className="font-medium">{student.name}</div>
                       <div className="text-xs text-muted-foreground">{student.email}</div>
                     </TableCell>
                     <TableCell className="text-center py-3 px-4">
                        <Badge
                            variant="outline"
                            className={cn("text-xs font-semibold", getStatusBadgeClass(student.degreeStatus))}
                            >
                            {student.degreeStatus}
                        </Badge>
                     </TableCell>
                     <TableCell className="text-center py-3 px-4">
                        <Badge
                            variant="outline"
                             className={cn("text-xs font-semibold", getStatusBadgeClass(student.titleStatus))}
                             >
                             {student.titleStatus}
                         </Badge>
                     </TableCell>
                     <TableCell className="text-center py-3 px-4">
                       <div className="flex items-center justify-center gap-2">
                         <Progress
                            value={student.overallProgress}
                            className={cn("w-full h-2", getProgressColorClass(student.overallProgress))}
                            aria-label={`Progreso general ${student.overallProgress}%`}
                          />
                         {/* <span className="text-xs font-medium w-10 text-right">{student.overallProgress}%</span> */}
                       </div>
                     </TableCell>
                   </TableRow>
                 ))
                ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                        No se encontraron estudiantes que coincidan con los filtros.
                      </TableCell>
                    </TableRow>
                 )}
             </TableBody>
           </Table>
          </div>
       </Card>

        {/* Summary and Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
           {/* Statistical Summary */}
            <Card className="shadow-sm">
             <CardHeader>
               <CardTitle className="text-lg font-semibold text-primary">Resumen Estadístico</CardTitle>
             </CardHeader>
             <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                 <span className="text-muted-foreground">Total de estudiantes:</span>
                 <span className="font-semibold text-primary">{totalStudents}</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-muted-foreground">Grados finalizados:</span>
                 <span className="font-semibold text-green-600">{gradosFinalizados}</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Títulos finalizados:</span>
                  <span className="font-semibold text-green-600">{titulosFinalizados}</span>
               </div>
             </CardContent>
           </Card>

           {/* General Progress */}
           <Card className="shadow-sm">
             <CardHeader>
               <CardTitle className="text-lg font-semibold text-primary">Progreso General</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4 pt-2">
               <div>
                  <div className="flex justify-between items-center mb-1">
                    <Badge variant="outline" className="text-xs bg-blue-100 text-blue-800 border-blue-300">Grados</Badge>
                    <span className="text-xs font-semibold text-blue-800">{progresoGrados}%</span>
                 </div>
                 <Progress value={progresoGrados} className="h-2 bg-blue-500" aria-label={`Progreso de grados ${progresoGrados}%`} />
               </div>
                <div>
                   <div className="flex justify-between items-center mb-1">
                     <Badge variant="outline" className="text-xs bg-green-100 text-green-800 border-green-300">Títulos</Badge>
                     <span className="text-xs font-semibold text-green-800">{progresoTitulos}%</span>
                   </div>
                   <Progress value={progresoTitulos} className="h-2 bg-green-500" aria-label={`Progreso de títulos ${progresoTitulos}%`} />
                 </div>
             </CardContent>
           </Card>

           {/* Quick Actions */}
            <Card className="shadow-sm">
             <CardHeader>
               <CardTitle className="text-lg font-semibold text-primary">Acciones Rápidas</CardTitle>
             </CardHeader>
              <CardContent className="space-y-3">
               <Button className="w-full justify-start bg-blue-500 hover:bg-blue-600 text-white">
                  <Download className="mr-2 h-4 w-4" /> Exportar Lista (.xlsx)
               </Button>
                <Button className="w-full justify-start bg-green-500 hover:bg-green-600 text-white">
                  <Mail className="mr-2 h-4 w-4" /> Enviar Notificaciones
                </Button>
                <Button className="w-full justify-start bg-yellow-500 hover:bg-yellow-600 text-white">
                  <Printer className="mr-2 h-4 w-4" /> Imprimir Reporte
                </Button>
              </CardContent>
            </Card>
        </div>


     </div>
   );
 }
