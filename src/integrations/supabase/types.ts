export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      analytics: {
        Row: {
          average_rating: number | null
          helpful_count: number | null
          last_updated: string | null
          product_id: string
          recommendation_count: number | null
        }
        Insert: {
          average_rating?: number | null
          helpful_count?: number | null
          last_updated?: string | null
          product_id: string
          recommendation_count?: number | null
        }
        Update: {
          average_rating?: number | null
          helpful_count?: number | null
          last_updated?: string | null
          product_id?: string
          recommendation_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback: {
        Row: {
          created_at: string | null
          id: string
          is_helpful: boolean | null
          product_id: string | null
          rating: number | null
          recommendation_id: string | null
          suggestion: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_helpful?: boolean | null
          product_id?: string | null
          rating?: number | null
          recommendation_id?: string | null
          suggestion?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_helpful?: boolean | null
          product_id?: string | null
          rating?: number | null
          recommendation_id?: string | null
          suggestion?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feedback_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "recommendations"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscriptions: {
        Row: {
          email: string
          id: string
          quiz_completed: boolean | null
          source: string | null
          subscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          quiz_completed?: boolean | null
          source?: string | null
          subscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          quiz_completed?: boolean | null
          source?: string | null
          subscribed_at?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          categories: string[]
          confidence_level: number | null
          created_at: string | null
          description: string | null
          dietary_info: string | null
          expected_results: string | null
          goal_mappings: string[] | null
          id: string
          image_url: string | null
          name: string
          priority: number | null
          product_url: string
          recommendation_reason: string | null
          therapeutic_claims: string[] | null
          updated_at: string | null
        }
        Insert: {
          categories?: string[]
          confidence_level?: number | null
          created_at?: string | null
          description?: string | null
          dietary_info?: string | null
          expected_results?: string | null
          goal_mappings?: string[] | null
          id?: string
          image_url?: string | null
          name: string
          priority?: number | null
          product_url: string
          recommendation_reason?: string | null
          therapeutic_claims?: string[] | null
          updated_at?: string | null
        }
        Update: {
          categories?: string[]
          confidence_level?: number | null
          created_at?: string | null
          description?: string | null
          dietary_info?: string | null
          expected_results?: string | null
          goal_mappings?: string[] | null
          id?: string
          image_url?: string | null
          name?: string
          priority?: number | null
          product_url?: string
          recommendation_reason?: string | null
          therapeutic_claims?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      recommendation_validations: {
        Row: {
          accuracy_score: number | null
          category_diversity_score: number | null
          diversity_score: number | null
          id: string
          personalization_score: number | null
          primary_goal_alignment: number | null
          product_availability: boolean | null
          recommendation_id: string | null
          response_time_ms: number | null
          test_case: string
          url_validity: boolean | null
          validation_date: string | null
          validation_details: Json | null
        }
        Insert: {
          accuracy_score?: number | null
          category_diversity_score?: number | null
          diversity_score?: number | null
          id?: string
          personalization_score?: number | null
          primary_goal_alignment?: number | null
          product_availability?: boolean | null
          recommendation_id?: string | null
          response_time_ms?: number | null
          test_case: string
          url_validity?: boolean | null
          validation_date?: string | null
          validation_details?: Json | null
        }
        Update: {
          accuracy_score?: number | null
          category_diversity_score?: number | null
          diversity_score?: number | null
          id?: string
          personalization_score?: number | null
          primary_goal_alignment?: number | null
          product_availability?: boolean | null
          recommendation_id?: string | null
          response_time_ms?: number | null
          test_case?: string
          url_validity?: boolean | null
          validation_date?: string | null
          validation_details?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "recommendation_validations_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "recommendations"
            referencedColumns: ["id"]
          },
        ]
      }
      recommendations: {
        Row: {
          category_distribution: Json | null
          confidence_scores: number[]
          created_at: string | null
          health_concerns: string[] | null
          id: string
          primary_goal: string | null
          product_ids: string[]
          relevance_score: number | null
          user_response_id: string | null
        }
        Insert: {
          category_distribution?: Json | null
          confidence_scores: number[]
          created_at?: string | null
          health_concerns?: string[] | null
          id?: string
          primary_goal?: string | null
          product_ids: string[]
          relevance_score?: number | null
          user_response_id?: string | null
        }
        Update: {
          category_distribution?: Json | null
          confidence_scores?: number[]
          created_at?: string | null
          health_concerns?: string[] | null
          id?: string
          primary_goal?: string | null
          product_ids?: string[]
          relevance_score?: number | null
          user_response_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recommendations_user_response_id_fkey"
            columns: ["user_response_id"]
            isOneToOne: false
            referencedRelation: "user_responses"
            referencedColumns: ["id"]
          },
        ]
      }
      user_responses: {
        Row: {
          created_at: string | null
          id: string
          responses: Json
        }
        Insert: {
          created_at?: string | null
          id?: string
          responses: Json
        }
        Update: {
          created_at?: string | null
          id?: string
          responses?: Json
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
