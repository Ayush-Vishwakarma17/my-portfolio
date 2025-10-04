import { ArrowUp } from "lucide-react"

export const Footer = () => {
    
    return <footer className="py-10 px-4 bg-card relation border-t border-border mt-12 pt-8 flex flex-wrap justify-center gap-10 items-center">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} If you are reading this, Collect moments, not things and watch your heart smile. </p>

        <div className="bg-primary-2 p-2 rounded-full">
            <a href="#hero">
            <ArrowUp className="card-hover-4 w-4 h-4"/>
        </a>
        </div>
        
    </footer>
}